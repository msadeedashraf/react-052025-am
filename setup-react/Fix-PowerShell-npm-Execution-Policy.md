
# 📄 Fixing PowerShell Script Execution Policy for npm.ps1

## ❗ Problem

You see this error when trying to use `npm` in PowerShell:

```powershell
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

This happens because **PowerShell’s execution policy** doesn’t allow scripts to run for security reasons.

---

## ✅ Solution: Change Execution Policy

### ⚠️ Recommended Approach (for current user only)

Use the `RemoteSigned` policy to allow locally created scripts to run.

---

## 🛠 Steps

1. **Open PowerShell as Administrator**

   - Press `Windows` key
   - Search for `PowerShell`
   - Right-click → **Run as Administrator**

2. **Check Current Execution Policy (Optional)**

   ```powershell
   Get-ExecutionPolicy -List
   ```

   > This shows the policy for each scope.

3. **Set Execution Policy for Current User**

   Run this command:

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
   ```

   ✅ This allows `.ps1` scripts like `npm.ps1` to run **if they are local or signed**.

4. **Close and Reopen PowerShell**

   Close the current terminal and open a new one (you can now use regular PowerShell, not Admin).

5. **Test**

   ```powershell
   npm -v
   ```

   You should now see the installed version of `npm`.

---

## 🧹 Optional: Safer Workaround Without Changing Policy

Instead of fixing PowerShell, you can run `npm` from:

- **Command Prompt** (`cmd`)
- **Git Bash**
- **WSL (Windows Subsystem for Linux)**

This avoids PowerShell restrictions altogether.

---

## 📎 Notes

- Setting the policy to `RemoteSigned` is safe for most users and allows running scripts that are either:
  - Written locally
  - Digitally signed

- To revert to default later, run:

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted -Force
   ```

---

## 📝 Author

This fix was provided to resolve PowerShell security restrictions related to Node.js and npm usage on Windows systems.
