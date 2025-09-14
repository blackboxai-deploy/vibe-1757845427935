import { NextResponse } from 'next/server';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import archiver from 'archiver';
import { Readable } from 'stream';

interface FileEntry {
  name: string;
  content: string;
  path: string;
}

export async function GET() {
  try {
    // Get all project files
    const files = await getAllProjectFiles();
    
    // Create ZIP buffer
    const zipBuffer = await createZipFromFiles(files);
    
    // Return ZIP file as download
    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="photo2calendar-source-code.zip"',
        'Content-Length': zipBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error generating ZIP:', error);
    return NextResponse.json(
      { error: 'Failed to generate source code ZIP' },
      { status: 500 }
    );
  }
}

async function getAllProjectFiles(): Promise<FileEntry[]> {
  const files: FileEntry[] = [];
  const projectRoot = process.cwd();
  
  // Define files and directories to include
  const includePatterns = [
    'src/',
    'public/',
    'package.json',
    'package-lock.json',
    'next.config.ts',
    'tailwind.config.ts',
    'postcss.config.mjs',
    'tsconfig.json',
    'components.json',
    '.gitignore',
    'README.md',
    'eslint.config.mjs'
  ];
  
  // Define files and directories to exclude
  const excludePatterns = [
    'node_modules',
    '.next',
    'dist',
    'build',
    '.git',
    '.env',
    '.env.local',
    '.env.production',
    '.DS_Store',
    'TODO.md' // Don't include our internal TODO file
  ];
  
  for (const pattern of includePatterns) {
    const fullPath = join(projectRoot, pattern);
    
    try {
      const stat = statSync(fullPath);
      
      if (stat.isFile()) {
        // Add single file
        const content = readFileSync(fullPath, 'utf-8');
        files.push({
          name: pattern,
          content,
          path: pattern
        });
      } else if (stat.isDirectory()) {
        // Add directory contents recursively
        const dirFiles = await getDirectoryFiles(fullPath, pattern, excludePatterns);
        files.push(...dirFiles);
      }
    } catch (error) {
      // File/directory doesn't exist, skip it
      console.log(`Skipping ${pattern}: not found`);
    }
  }
  
  return files;
}

async function getDirectoryFiles(
  dirPath: string, 
  relativePath: string, 
  excludePatterns: string[]
): Promise<FileEntry[]> {
  const files: FileEntry[] = [];
  
  try {
    const entries = readdirSync(dirPath);
    
    for (const entry of entries) {
      // Skip excluded patterns
      if (excludePatterns.some(pattern => entry.includes(pattern))) {
        continue;
      }
      
      const fullPath = join(dirPath, entry);
      const entryRelativePath = join(relativePath, entry);
      
      try {
        const stat = statSync(fullPath);
        
        if (stat.isFile()) {
          const content = readFileSync(fullPath, 'utf-8');
          files.push({
            name: entry,
            content,
            path: entryRelativePath
          });
        } else if (stat.isDirectory()) {
          // Recursively get subdirectory files
          const subFiles = await getDirectoryFiles(fullPath, entryRelativePath, excludePatterns);
          files.push(...subFiles);
        }
      } catch (error) {
        console.log(`Skipping ${entryRelativePath}: ${error}`);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }
  
  return files;
}

function createZipFromFiles(files: FileEntry[]): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });
    
    const chunks: Buffer[] = [];
    
    archive.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    archive.on('end', () => {
      const buffer = Buffer.concat(chunks);
      resolve(buffer);
    });
    
    archive.on('error', (err) => {
      reject(err);
    });
    
    // Add files to ZIP
    files.forEach((file) => {
      archive.append(file.content, { name: file.path });
    });
    
    // Add README with instructions
    const readmeContent = `# Photo2Calendar Landing Page

This is a complete Next.js project for a Photo2Calendar-style landing page.

## Features
- Modern, responsive design
- Hero section with call-to-action
- How it works section with 3-step process
- Features section with specifications
- Interactive gallery with filtering
- Pricing section with multiple tiers
- Professional footer
- Built with Next.js 15, Tailwind CSS, and shadcn/ui

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   # or
   pnpm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   pnpm dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

- \`src/app/\` - Next.js app directory with pages and layouts
- \`src/components/\` - Reusable React components
- \`src/components/ui/\` - shadcn/ui components
- \`src/lib/\` - Utility functions
- \`public/\` - Static assets

## Customization

You can easily customize:
- Colors and branding in the components
- Content and copy throughout the site
- Images and photography
- Pricing and features
- Layout and structure

Built with ❤️ using Next.js and Tailwind CSS.
`;
    
    archive.append(readmeContent, { name: 'SETUP-INSTRUCTIONS.md' });
    
    // Finalize the ZIP
    archive.finalize();
  });
}