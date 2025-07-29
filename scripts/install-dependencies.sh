#!/bin/bash

echo "Installing Spline dependencies..."
yarn add @splinetool/react-spline @splinetool/runtime

echo "Installing other required dependencies..."
yarn add @react-three/fiber @react-three/drei three
yarn add -D @types/three

echo "Dependencies installed successfully!"
echo "You can now run 'yarn dev' to start the development server."
