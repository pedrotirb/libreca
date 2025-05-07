fn main() {
  // Re-run the build script when anything in tauri.conf.json changes
  println!("cargo:rerun-if-changed=tauri.conf.json");
}