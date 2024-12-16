#!/usr/bin/env node
import VnJs from './scripts/library';
const args: Array<string> = process.argv.slice(2);
const Vn = new VnJs(args)

Vn.command()
