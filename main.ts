// news-image-20261122 entry: "The World in One Day" — Sunday 22 November 2026.
//
// The picture beside this program (entry.png, 1024x1024) sums up that day's
// world news in a single newspaper-style image: the COP31 collapse in Antalya
// as the lead, plus the Shenzhen trilateral summit, the Dymer apartment-block
// strike, Iran's strike on Bahrain, the AI market sell-off, the World Court's
// Rohingya genocide ruling and the capture of 'El Chapo Isidro', with shorter
// lines for the EU-Indonesia trade deal, the Cikande factory fire and
// BepiColombo's arrival at Mercury.
//
// The program runs offline with the Node standard library only. It copies the
// bundled image to the output directory the grader names, byte for byte, so
// both graded runs produce exactly the same file.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// Guard the gate's limits before writing anything: the file must be a whole
// PNG of at most 1 MiB. If the bundled image ever failed that, failing loudly
// here is better than writing an entry the gate would score as invalid.
const bytes = readFileSync(source);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = PNG_SIGNATURE.every((byte, i) => bytes[i] === byte);
if (!isPng) throw new Error('entry.png does not start with the PNG signature');
if (bytes.length > 1_048_576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);

copyFileSync(source, join(outputDir, 'entry.png'));
console.log(`wrote entry.png (${bytes.length} bytes) to ${outputDir}`);
