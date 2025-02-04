let buildingInterface = [{
  title: "Start",
  list: [
    "pacman -S git",
    "cd ~/",
    "git clone https://aur.archlinux.org/yay.git",
    "cd ~/yay",
    "makepkg -sric",
    "cd ..",
    "yay",
    "pacman -Suy ",
  ]
},
{
  title: "Zsh",
  list: [
    "yay -S zsh",
    "sh -c \"$(curl -fsSL https://install.ohmyz.sh/)\"",
    "git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k",
    "nano ~/.zshrc",
    "find parameter > ZSH_THEME > put this > \"powerlevel10k/powerlevel10k\"",
    "reboot terminal",
  ]
},
{
  title: "Arch lite",
  list: [
    "sudo pacman -Rns $(pacman -Qeq gnome-software gnome-calendar gnome-calls gnome-characters gnome-chess gnome-clocks gnome-contacts gnome-maps gnome-music gnome-notes gnome-photos gnome-remote-desktop gnome-text-editor gnome-tour gnome-user-docs gnome-font-viewer gnome-weather totem sushi epiphany) ",
  ]
},
{
  title: "Arch boost",
  list: [
    "git clone https://aur.archlinux.org/ananicy.git",
    "cd ananicy",
    "makepkg -sric",
    "sudo systemctl enable --now ananicy",
    "sudo systemctl enable fstrim.timer",
    "sudo fstrim -v /",
    "sudo fstrim -va /",
    "sudo pacman -S dbus-broker",
    "sudo systemctl enable --now dbus-broker.service"
  ]
},
{
  title: "Drivers",
  list: [
    "yay -S nvidia nvidia-utils nvidia-settings opencl-nvidia nvidia-settings mesa mesa-utils"
  ]
},
{
  title: "Bluetooth",
  list: [
    "yay -S bluez",
    "sudo systemctl start bluetooth",
    "sudo systemctl enable bluetooth"
  ]
},
{
  title: "Printing HP LaserJet P1102",
  list: [
    "yay -S cups hplip",
    "sudo systemctl start cups",
    "hp-setup -i"
  ]
},
{
  title: "Programs",
  list: [
    "yay -S libreoffice qbittorrent obsidian firefox vlc telegram-desktop visual-studio-code-bin blender krita"
  ]
},
{
  title: "Core",
  list: [
    "yay -S dotnet-sdk dotnet-runtime python lrzip unrar unzip unace p7zip squashfs-tools",
  ]
},
{
  title: "Gaming",
  list: [
    "yay -S wine gamescope mangohud gamemode mono steam heroic-games-launcher-bin startwine lutris",
  ]
},
{
  title: "Steam game settings",
  list: [
    "[Cs2] proton-experimental:",
    "[DayZ] proton-experimental: gamescope -f --force-grab-cursor -- %command%",
    "[Grim dawn] proton-experimental:"
  ]
}]

function build(building) {
  let container = newElement("div", ["class", "container"], null);
  document.body.appendChild(container)
  let linkContainerEl = newElement("div", ["class", "link-container"], null);
  for (const i in building) {
    const brick = building[i]
    let linkEl = newElement("a", ["href", `#${brick.title}`], brick.title)
    linkEl.setAttribute("class", "link")
    linkContainerEl.appendChild(linkEl);
  }
  container.appendChild(linkContainerEl);
  for (const i in building) {
    const brick = building[i]
    let titleEl = newElement("h1", ["id", `${brick.title}`], brick.title)
    titleEl.addEventListener('click', (mouseEv) => {
      navigator.clipboard.writeText(brick.list.join("\n"));
    })
    let listEl = newElement("div", ["class", "list"], null)
    for (const j in brick.list) {
      let lineEl = newElement("p", ["class", "line"], brick.list[j])
      listEl.appendChild(lineEl)
    }
    container.appendChild(titleEl)
    container.appendChild(listEl)
  }
}

function getFromClassName(className) {
  return document.getElementsByClassName(className)[0]
}

function newElement(tag, [attribute, value], innerHtml) {
  let el = document.createElement(tag)
  if (innerHtml != null && innerHtml != "") {
    el.innerHTML = innerHtml
  }
  el.setAttribute(attribute, value)
  return el;
}

document.title = `ArchLinux configuration!`
build(buildingInterface)
setTimeout(() => {
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)"
}, 100)