#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![])
    .plugin(tauri_plugin_window_state::Builder::default().build()) // remembers window size
    .run(tauri::generate_context!())
    .expect("error while running Libreca desktop");
}