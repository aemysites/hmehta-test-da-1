#!/bin/bash

# MeinMEDCAMPUS Crawler Setup Script
# This script sets up everything needed to run the comprehensive crawl

set -e

echo "================================================"
echo "   MeinMEDCAMPUS Crawler Setup"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "crawler.js" ]; then
    echo "❌ Error: crawler.js not found!"
    echo "Please run this script from the project root directory:"
    echo "  cd /Users/hmehta/Documents/GitRepos/hmehta-test-da-1"
    echo "  bash setup-crawler.sh"
    exit 1
fi

echo "✅ Found crawler.js"
echo ""

# Check Node.js
echo "🔍 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js installed: $NODE_VERSION"
echo ""

# Check npm
echo "🔍 Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm installed: $NPM_VERSION"
echo ""

# Install Playwright
echo "📦 Installing Playwright..."
npm install playwright

echo ""
echo "✅ Playwright installed"
echo ""

# Install browser binaries
echo "🌐 Installing Chromium browser..."
npx playwright install chromium

echo ""
echo "✅ Chromium installed"
echo ""

# Create output directory
echo "📁 Creating output directory..."
mkdir -p ./content/original/pages

echo "✅ Output directory ready"
echo ""

# Verify setup
echo "🔍 Verifying installation..."
if [ -d "node_modules/playwright" ]; then
    echo "✅ Playwright module found"
else
    echo "❌ Playwright module not found"
    exit 1
fi

echo ""
echo "================================================"
echo "   ✅ Setup Complete!"
echo "================================================"
echo ""
echo "You are now ready to run the crawler."
echo ""
echo "To start the crawl, run:"
echo "  node crawler.js"
echo ""
echo "Expected runtime: 2-4 hours"
echo "Expected output: 150-250+ pages"
echo ""
echo "For more information, see:"
echo "  - QUICK_START_CRAWL.md"
echo "  - CRAWLER_README.md"
echo "  - CRAWL_SUMMARY.md"
echo ""
echo "================================================"
