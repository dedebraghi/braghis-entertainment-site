# Publish to GitHub

## Objective
Initialize a local git repository and push it to a new remote GitHub repository.

## Inputs
- `repo_name`: Name of the repository to create (e.g., "braghis-entertainment-site")
- `local_path`: Absolute path to the local project folder
- `visibility`: "public" or "private" (default: "public")

## Tools
- `mcp_github-mcp-server_create_repository` (for creating the remote repo)
- `execution/init_git_and_push.py` (for local git operations)

## Process
1.  **Create Remote Repository**: Use the MCP tool to create the repository on GitHub.
2.  **Initialize and Push**: Run `execution/init_git_and_push.py` with the remote URL.
    -   Initialize git if not already initialized.
    -   Add all files (`git add .`).
    -   Commit (`git commit -m "Initial commit"`).
    -   Rename branch to `main`.
    -   Add remote origin.
    -   Push to origin main.

## Outputs
- URL of the created repository.
