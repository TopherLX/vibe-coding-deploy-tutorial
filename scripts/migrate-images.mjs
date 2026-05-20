import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const SOURCE_ROOT = 'docmost/files'
const TARGET_ROOT = 'public/images'

const mappings = [
  // === Visual Studio Code (10) ===
  { src: '019e3fb7-a746-715c-bfb7-0b21fd4e03db/image.png', dst: 'vscode/01-website.png' },
  { src: '019e3fbe-0164-7421-a6ab-57d2b466c50d/image.png', dst: 'vscode/02-license.png' },
  { src: '019e3fc5-c06b-778e-9351-019fdea11a0b/image.png', dst: 'vscode/03-path-system.png' },
  { src: '019e3fc9-2e38-73ae-beec-a332223dff1a/image.png', dst: 'vscode/04-system-next.png' },
  { src: '019e3fbe-f0ef-70b7-8c9a-bd6202e109a2/image.png', dst: 'vscode/05-additional-tasks.png' },
  { src: '019e3fbf-7224-7678-8b56-2d9a8fecc876/image.png', dst: 'vscode/06-install.png' },
  { src: '019e3fbf-bd55-728b-b98c-f7b44637a36d/image.png', dst: 'vscode/07-progress.png' },
  { src: '019e3fca-ce65-7318-a345-b1d3e4ad49c9/image.png', dst: 'vscode/08-complete.png' },
  { src: '019e3fcc-b9ff-7155-8fa1-3e8a0089a534/image.png', dst: 'vscode/09-start-menu.png' },
  { src: '019e3fcb-569e-7260-81a8-8357863c9d51/image.png', dst: 'vscode/10-opened.png' },

  // === PowerShell 7 (10) ===
  { src: '019e3f69-b978-75bf-a471-0cbe7fb8e463/image.png', dst: 'powershell/01-website.png' },
  { src: '019e3f6e-2b80-7393-bb66-939653489fd5/image.png', dst: 'powershell/02-next.png' },
  { src: '019e3f71-c24b-741f-89ce-97307fea4de4/image.png', dst: 'powershell/03-path.png' },
  { src: '019e3f7f-9123-750a-b920-750b52e4adf7/image.png', dst: 'powershell/04-options.png' },
  { src: '019e3f75-e012-74b5-a3cb-2d8783353d77/image.png', dst: 'powershell/05-next2.png' },
  { src: '019e3f76-010a-76fc-9502-842dc1d410e1/image.png', dst: 'powershell/06-install.png' },
  { src: '019e3f76-30ed-74ea-9ae6-662e1a5f8034/image.png', dst: 'powershell/07-complete.png' },
  { src: '019e3f80-e9a8-745a-9f65-32cf5f32599b/image.png', dst: 'powershell/08-complete2.png' },
  { src: '019e3f85-0572-76ce-88b9-609ce029d724/image.png', dst: 'powershell/09-start-menu.png' },
  { src: '019e3f88-1ee2-722b-aaf7-383b602b974d/image.png', dst: 'powershell/10-pwsh.png' },

  // === Windows Terminal (7) ===
  { src: '019e3f8b-0ea5-776f-91fb-157cce84ba00/image.png', dst: 'windows-terminal/01-installer.png' },
  { src: '019e3f95-b7be-73be-b087-0050489175c7/image.png', dst: 'windows-terminal/02-opened.png' },
  { src: '019e3f97-3f9d-70fe-8c20-72821c0cfecc/image.png', dst: 'windows-terminal/03-settings.png' },
  { src: '019e3fa8-6a7c-741c-85d2-2d42a4419c0b/image.png', dst: 'windows-terminal/04-new-profile.png' },
  { src: '019e3fa6-a496-776e-926d-dabd7e3621a5/image.png', dst: 'windows-terminal/05-configure.png' },
  { src: '019e3fa7-71bb-73bb-9cdd-cc8f3f4bed48/image.png', dst: 'windows-terminal/06-default.png' },
  { src: '019e3fae-3e3f-70bb-b8be-5282678ba23f/image.png', dst: 'windows-terminal/07-verify.png' },

  // === Node.js (13) ===
  { src: '019e3eff-fbef-734c-ac71-9a4ac7661d4b/image.png', dst: 'nodejs/01-installer.png' },
  { src: '019e3f00-c057-717b-b553-ff0ea5988145/image.png', dst: 'nodejs/02-installer2.png' },
  { src: '019e3f02-0bf1-737d-865e-9f15fe371a32/image.png', dst: 'nodejs/03-license.png' },
  { src: '019e3f04-75e6-769d-9aa7-ab09ef240746/image.png', dst: 'nodejs/04-path.png' },
  { src: '019e3f05-66ab-774b-a4b3-d53875babb2d/image.png', dst: 'nodejs/05-next.png' },
  { src: '019e3f07-b67e-74a0-8a10-61b1a0f8d193/image.png', dst: 'nodejs/06-uncheck.png' },
  { src: '019e3f0a-12e0-73f7-8c93-4aebbc1c2791/image.png', dst: 'nodejs/07-install.png' },
  { src: '019e3f0a-ca63-7408-b80c-1e50d6467f16/image.png', dst: 'nodejs/08-progress.png' },
  { src: '019e3f0b-6e3f-76ba-a890-6da8a30a0cdb/image.png', dst: 'nodejs/09-close-processes.png' },
  { src: '019e3f0b-a1b6-77a8-9bd0-2a60d6dc4bcc/image.png', dst: 'nodejs/10-prompt.png' },
  { src: '019e3f0b-e214-7138-82be-d7f2a3d0c3d4/image.png', dst: 'nodejs/11-complete.png' },
  { src: '019e3f0c-a051-7759-bd9a-7c821ac12770/image.png', dst: 'nodejs/12-complete2.png' },
  { src: '019e3f44-b978-745e-91f9-93c9167e7578/image.png', dst: 'nodejs/13-verify.png' },

  // === pnpm (2) ===
  { src: '019e3f5a-ba4e-7019-9a13-f724ec3b9b2f/image.png', dst: 'pnpm/01-install.png' },
  { src: '019e3f5c-0aa4-707e-8420-9b2b062f1893/image.png', dst: 'pnpm/02-verify.png' },

  // === Git (17) ===
  { src: '019e3f19-f6a5-7104-b17c-67cb056703c8/image.png', dst: 'git/01-installer.png' },
  { src: '019e3f1c-5542-70a9-af48-d6c4e5705e80/image.png', dst: 'git/02-path.png' },
  { src: '019e3f21-1a3d-747f-b90f-4e17d6a29e4f/image.png', dst: 'git/03-components.png' },
  { src: '019e3f21-ac15-761b-8d7a-3052701d4bed/image.png', dst: 'git/04-next.png' },
  { src: '019e3f22-d1cb-719e-949f-d520c1367594/image.png', dst: 'git/05-editor.png' },
  { src: '019e3f23-795b-76aa-b2c5-92a978c4a0f5/image.png', dst: 'git/06-branch-name.png' },
  { src: '019e3f23-e389-7108-9d07-4174aedf79a0/image.png', dst: 'git/07-next7.png' },
  { src: '019e3f24-384d-7151-bdfd-c6bea327687d/image.png', dst: 'git/08-next8.png' },
  { src: '019e3f24-7ac0-70c9-9926-0295604bbef5/image.png', dst: 'git/09-next9.png' },
  { src: '019e3f25-1653-707f-a481-f5d43c197659/image.png', dst: 'git/10-next10.png' },
  { src: '019e3f25-6dd6-7296-9582-ce8c135d24c4/image.png', dst: 'git/11-next11.png' },
  { src: '019e3f26-0740-71b7-a470-c1ec9552e165/image.png', dst: 'git/12-next12.png' },
  { src: '019e3f26-6929-736d-b791-f504291b7eed/image.png', dst: 'git/13-next13.png' },
  { src: '019e3f29-52e1-757a-a210-50fd2209f0bd/image.png', dst: 'git/14-next14.png' },
  { src: '019e3f29-8fd8-73be-b024-345e614348ce/image.png', dst: 'git/15-complete.png' },
  { src: '019e3f2a-6000-7514-a223-0eae804d681a/image.png', dst: 'git/16-complete2.png' },
  { src: '019e3f5f-a52f-7082-88c4-02cb9a28f9a5/image.png', dst: 'git/17-verify.png' },

  // === Claude Code Terminal (5) ===
  { src: '019e3fd1-202d-7143-ba03-557aaea2d8d7/demo.gif', dst: 'claude-code-terminal/01-demo.gif' },
  { src: '019e3fd4-7870-76cc-8f5e-9dd79e033b29/image.png', dst: 'claude-code-terminal/02-website.png' },
  { src: '019e3ff3-2323-741b-b21a-42f6c0f40b7e/image.png', dst: 'claude-code-terminal/03-pnpm-install.png' },
  { src: '019e3ff5-a3ef-7719-8e25-172d72359d0f/image.png', dst: 'claude-code-terminal/04-offline-install.png' },
  { src: '019e3ff7-d280-72db-a3ec-46d2b1cc0e4a/image.png', dst: 'claude-code-terminal/05-verify.png' },

  // === Claude Code Extension (2) ===
  { src: '019e3fff-f17e-7309-8d20-cb4173751169/20260519-192854.png', dst: 'claude-code-extension/01-install.png' },
  { src: '019e4000-2661-72fc-a55e-a39ae886f886/20260519-192947.png', dst: 'claude-code-extension/02-icon.png' },

  // === CC Switch (16) ===
  { src: '019e4007-78bd-707f-927d-a7ca6cb5a02a/image.png', dst: 'cc-switch/01-website.png' },
  { src: '019e400b-8b9e-765e-90c2-ab91c6356f2c/image.png', dst: 'cc-switch/02-installer.png' },
  { src: '019e400c-c4eb-709b-9327-656008ee6061/image.png', dst: 'cc-switch/03-path.png' },
  { src: '019e400d-638c-74b9-8f05-8c7a3e7d6fd9/image.png', dst: 'cc-switch/04-install.png' },
  { src: '019e400e-5d13-7188-bd02-621e5c74ec9d/image.png', dst: 'cc-switch/05-complete.png' },
  { src: '019e400e-85da-7565-8d88-526c0481448b/image.png', dst: 'cc-switch/06-complete2.png' },
  { src: '019e401a-5999-75dd-8c1e-979fefe6d952/image.png', dst: 'cc-switch/07-deepseek-signup.png' },
  { src: '019e401b-16ac-7498-83e2-54faad635d46/image.png', dst: 'cc-switch/08-create-key.png' },
  { src: '019e401b-b306-72a9-abea-3d3fd1b84cd4/image.png', dst: 'cc-switch/09-copy-key.png' },
  { src: '019e4012-c0d9-758e-bde7-5a36eb6b3ff6/image.png', dst: 'cc-switch/10-click-plus.png' },
  { src: '019e4012-e7dd-7166-9a6d-1556bb2cdc41/image.png', dst: 'cc-switch/11-provider.png' },
  { src: '019e401d-2827-718a-87be-fff3dbcba21a/image.png', dst: 'cc-switch/12-api-key.png' },
  { src: '019e4015-26ff-73d8-b881-10e176d7bf73/image.png', dst: 'cc-switch/13-model-mapping.png' },
  { src: '019e4024-e189-7390-91ac-8d893c11682d/image.png', dst: 'cc-switch/14-terminal-verify.png' },
  { src: '019e431b-9de4-70c5-bf61-34b6eeea489d/Video_2026-05-20_094732_编辑.gif', dst: 'cc-switch/15-terminal-demo.gif' },
  { src: '019e430e-2794-756e-b816-996ab4ca4ec2/Video_2026-05-20_093746_编辑.gif', dst: 'cc-switch/16-extension-demo.gif' },
]

let ok = 0
let missing = 0

for (const { src, dst } of mappings) {
  const srcPath = join(SOURCE_ROOT, src)
  const dstPath = join(TARGET_ROOT, dst)

  if (!existsSync(srcPath)) {
    console.error(`MISSING: ${srcPath}`)
    missing++
    continue
  }

  mkdirSync(join(TARGET_ROOT, dst.split('/')[0]), { recursive: true })
  copyFileSync(srcPath, dstPath)
  console.log(`OK: ${dst}`)
  ok++
}

console.log(`\nProcessed: ${ok} copied, ${missing} missing, ${mappings.length} total`)
