import argparse
import subprocess
import os
import sys

def run_command(command, cwd=None):
    try:
        result = subprocess.run(
            command,
            cwd=cwd,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        print(f"Success: {' '.join(command)}")
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {' '.join(command)}")
        print(f"Error output: {e.stderr}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="Initialize git and push to remote.")
    parser.add_argument("--repo-url", required=True, help="The remote repository URL")
    parser.add_argument("--local-path", required=True, help="The local project path")
    
    args = parser.parse_args()
    
    local_path = args.local_path
    repo_url = args.repo_url
    
    if not os.path.exists(local_path):
        print(f"Error: Local path {local_path} does not exist.")
        sys.exit(1)

    # Initialize git
    if not os.path.exists(os.path.join(local_path, ".git")):
        run_command(["git", "init"], cwd=local_path)
    
    # Add all files
    run_command(["git", "add", "."], cwd=local_path)
    
    # Commit
    try:
        run_command(["git", "commit", "-m", "Initial commit"], cwd=local_path)
    except SystemExit:
        # If commit fails (e.g., nothing to commit), proceed but warn
        print("Warning: Commit might have failed (clean working tree?), proceeding...")

    # Rename branch to main
    run_command(["git", "branch", "-M", "main"], cwd=local_path)

    # Add remote (remove if exists)
    try:
        run_command(["git", "remote", "remove", "origin"], cwd=local_path)
    except SystemExit:
        pass # Ignore if origin doesn't exist
    
    run_command(["git", "remote", "add", "origin", repo_url], cwd=local_path)
    
    # Push
    run_command(["git", "push", "-u", "origin", "main"], cwd=local_path)
    
    print(f"Successfully pushed to {repo_url}")

if __name__ == "__main__":
    main()
