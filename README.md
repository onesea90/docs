# SIYA Documentation Guidelines

Welcome to the SIYA documentation repository! This site is built with [Mintlify](https://mintlify.com), providing beautiful, interactive documentation for the SIYA multi-agent AI system.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** package manager
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syia-ai/siya-public-documentation.git
   cd siya-public-documentation
   ```

2. **Install Mintlify CLI globally**
   ```bash
   npm install -g mint
   ```

3. **Verify installation**
   ```bash
   mint --version
   ```

### Local Development

1. **Start the development server**
   ```bash
   mint dev
   ```
   
   This will start a local server at `http://localhost:3000`

2. **Open your browser**
   Navigate to `http://localhost:3000` to view the documentation

3. **Make changes**
   - Edit any `.mdx` files
   - Changes will automatically reload in the browser
   - Configuration changes in `docs.json` may require a server restart



## 🔧 Configuration

### Main Configuration (`docs.json`)

 
### Update Navigation tab
- Open `docs.json`.
- Locate the **navigation** section.
- Inside the relevant group, add the path of your `.mdx` file to the `path` array.

---


## 🚀 Deployment

### Automatic Deployment

This site is configured for automatic deployment when changes are pushed to the main branch.


✅ You can now preview your changes live in the browser while you work.
