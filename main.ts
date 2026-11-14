// food-picture-01 entry (Node 22, standard library only): the picture is entry.jpg beside this file,
// and the program copies it to /output/entry.png. The image is a whole JPEG of 1024x1024 pixels,
// 252,366 bytes (under the 1 MiB cap). Deterministic: the same bytes every run, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
