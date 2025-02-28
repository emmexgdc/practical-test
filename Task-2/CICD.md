This GitHub Actions workflow will:

1. Trigger on pushes to main/master branches or pull requests targeting those branches
   
2. Run tests first:
   - Uses Node.js 18 explicitly as requested
   - Installs dependencies with `npm install` for clean installs
   - Runs your test suite with `npm test`
   - Uses environment variables from GitHub Secrets for testing

3. Deploy to Render only if:
   - Use an action gotten from githubs action store.
   - Tests pass successfully
   - The event is a push (not a pull request)
   - The target branch is main or master
