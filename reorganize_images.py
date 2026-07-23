#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
images 資料夾重組腳本
------------------------------------------------
用途：把目前扁平放在 images/ 底下的截圖，依照新版 ID 命名規則
      跟 categoryId/subgroupId 分類，搬進對應子資料夾並改名。

使用方式：
1. 把這個檔案放在你的專案根目錄（跟 images/ 資料夾同一層）
2. 執行：python reorganize_images.py
3. 預設是「先預覽不動手」模式，看過清單覺得沒問題後，
   把下面的 DRY_RUN 改成 False 再重新執行一次，才會真的搬檔案。
------------------------------------------------
"""

import os
import re
import shutil

DRY_RUN = False   # 先預覽，確認沒問題後改成 False 才會真的搬移
IMAGES_DIR = "images"

# 舊 id -> {new_id, categoryId, subgroupId}
ID_MAP = {
  "vms-01": {
    "new_id": "vms-overview-01",
    "categoryId": "gvvms",
    "subgroupId": "overview"
  },
  "vms-02": {
    "new_id": "vms-liveview-01",
    "categoryId": "gvvms",
    "subgroupId": "liveview"
  },
  "vms-03": {
    "new_id": "vms-liveview-02",
    "categoryId": "gvvms",
    "subgroupId": "liveview"
  },
  "vms-04": {
    "new_id": "vms-events-01",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-25": {
    "new_id": "vms-events-02",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-26": {
    "new_id": "vms-events-03",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-27": {
    "new_id": "vms-events-04",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-28": {
    "new_id": "vms-events-05",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-29": {
    "new_id": "vms-events-06",
    "categoryId": "gvvms",
    "subgroupId": "events"
  },
  "vms-05": {
    "new_id": "vms-onboarding-01",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-06": {
    "new_id": "vms-onboarding-02",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-07": {
    "new_id": "vms-onboarding-03",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-08": {
    "new_id": "vms-onboarding-04",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-09": {
    "new_id": "vms-onboarding-05",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-10": {
    "new_id": "vms-onboarding-06",
    "categoryId": "gvvms",
    "subgroupId": "onboarding"
  },
  "vms-11": {
    "new_id": "vms-camerasettings-01",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-12": {
    "new_id": "vms-camerasettings-02",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-13": {
    "new_id": "vms-camerasettings-03",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-14": {
    "new_id": "vms-camerasettings-04",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-15": {
    "new_id": "vms-camerasettings-05",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-16": {
    "new_id": "vms-camerasettings-06",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-17": {
    "new_id": "vms-camerasettings-07",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-18": {
    "new_id": "vms-camerasettings-08",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-19": {
    "new_id": "vms-camerasettings-09",
    "categoryId": "gvvms",
    "subgroupId": "camerasettings"
  },
  "vms-20": {
    "new_id": "vms-recordsetting-01",
    "categoryId": "gvvms",
    "subgroupId": "recordsetting"
  },
  "vms-21": {
    "new_id": "vms-recordsetting-02",
    "categoryId": "gvvms",
    "subgroupId": "recordsetting"
  },
  "vms-22": {
    "new_id": "vms-recordsetting-03",
    "categoryId": "gvvms",
    "subgroupId": "recordsetting"
  },
  "vms-23": {
    "new_id": "vms-recordsetting-04",
    "categoryId": "gvvms",
    "subgroupId": "recordsetting"
  },
  "vms-24": {
    "new_id": "vms-recordsetting-05",
    "categoryId": "gvvms",
    "subgroupId": "recordsetting"
  },
  "vms-30": {
    "new_id": "vms-systemconfig-01",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-31": {
    "new_id": "vms-systemconfig-02",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-32": {
    "new_id": "vms-systemconfig-03",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-33": {
    "new_id": "vms-systemconfig-04",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-34": {
    "new_id": "vms-systemconfig-05",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-35": {
    "new_id": "vms-systemconfig-06",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-36": {
    "new_id": "vms-systemconfig-07",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-48": {
    "new_id": "vms-systemconfig-08",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-49": {
    "new_id": "vms-systemconfig-09",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-50": {
    "new_id": "vms-systemconfig-10",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-51": {
    "new_id": "vms-systemconfig-11",
    "categoryId": "gvvms",
    "subgroupId": "systemconfig"
  },
  "vms-37": {
    "new_id": "vms-playback-01",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-38": {
    "new_id": "vms-playback-02",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-39": {
    "new_id": "vms-playback-03",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-40": {
    "new_id": "vms-playback-04",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-41": {
    "new_id": "vms-playback-05",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-42": {
    "new_id": "vms-playback-06",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-43": {
    "new_id": "vms-playback-07",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-44": {
    "new_id": "vms-playback-08",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-45": {
    "new_id": "vms-playback-09",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-47": {
    "new_id": "vms-playback-10",
    "categoryId": "gvvms",
    "subgroupId": "playback"
  },
  "vms-46": {
    "new_id": "vms-systemlog-01",
    "categoryId": "gvvms",
    "subgroupId": "systemlog"
  },
  "ts-01": {
    "new_id": "vms-troubleshooting-01",
    "categoryId": "gvvms",
    "subgroupId": "troubleshooting"
  },
  "license-01": {
    "new_id": "vms-license-01",
    "categoryId": "gvvms",
    "subgroupId": "license"
  },
  "arch-1": {
    "new_id": "arch-1",
    "categoryId": "arch",
    "subgroupId": "overview"
  },
  "ipcam-1": {
    "new_id": "ipcam-1",
    "categoryId": "arch",
    "subgroupId": "ipcamera"
  },
  "cms-1": {
    "new_id": "cms-1",
    "categoryId": "arch",
    "subgroupId": "cms"
  },
  "cms-2": {
    "new_id": "cms-2",
    "categoryId": "arch",
    "subgroupId": "cms"
  },
  "cms-3": {
    "new_id": "cms-3",
    "categoryId": "arch",
    "subgroupId": "cms"
  },
  "cms-4": {
    "new_id": "cms-4",
    "categoryId": "arch",
    "subgroupId": "cms"
  },
  "asmgr-1": {
    "new_id": "asmgr-1",
    "categoryId": "arch",
    "subgroupId": "asmanager"
  },
  "recorder-1": {
    "new_id": "recorder-1",
    "categoryId": "arch",
    "subgroupId": "recorder"
  },
  "protocol-1": {
    "new_id": "protocol-1",
    "categoryId": "arch",
    "subgroupId": "protocol"
  },
  "hw-1": {
    "new_id": "hw-1",
    "categoryId": "arch",
    "subgroupId": "hardware"
  },
  "sysenv-1": {
    "new_id": "sysenv-1",
    "categoryId": "arch",
    "subgroupId": "sysenv"
  },
  "ipcam-2": {
    "new_id": "ipcam-2",
    "categoryId": "arch",
    "subgroupId": "ipcamera"
  },
  "vms-pos-01": {
    "new_id": "vms-pos-01",
    "categoryId": "gvvms",
    "subgroupId": "pos"
  },
  "vms-pos-02": {
    "new_id": "vms-pos-02",
    "categoryId": "gvvms",
    "subgroupId": "pos"
  }
}

def main():
    if not os.path.isdir(IMAGES_DIR):
        print(f"找不到 {IMAGES_DIR} 資料夾，請確認這個腳本跟 images/ 放在同一層。")
        return

    # 依照舊 id 字串長度由長到短排序，避免 "vms-05" 誤吃到 "vms-05x" 這種前綴衝突
    old_ids_sorted = sorted(ID_MAP.keys(), key=len, reverse=True)

    moved, skipped, unmatched = [], [], []

    for fname in sorted(os.listdir(IMAGES_DIR)):
        full_path = os.path.join(IMAGES_DIR, fname)
        if not os.path.isfile(full_path):
            continue
        if not fname.lower().endswith(".png"):
            skipped.append(fname)
            continue

        matched_old_id = None
        for old_id in old_ids_sorted:
            prefix = old_id + "-"
            if fname.startswith(prefix):
                remainder = fname[len(prefix):]
                # remainder 應該長得像 01.png / 02.png
                if re.fullmatch(r"\d{2}\.png", remainder, re.IGNORECASE):
                    matched_old_id = old_id
                    break

        if not matched_old_id:
            unmatched.append(fname)
            continue

        info = ID_MAP[matched_old_id]
        new_id = info["new_id"]
        folder = f'{info["categoryId"]}/{info["subgroupId"]}'
        num_part = fname[len(matched_old_id) + 1:]  # 例如 "01.png"
        new_filename = f"{new_id}-{num_part}"
        target_dir = os.path.join(IMAGES_DIR, *folder.split("/"))
        target_path = os.path.join(target_dir, new_filename)

        moved.append((fname, os.path.join(folder, new_filename)))

        if not DRY_RUN:
            os.makedirs(target_dir, exist_ok=True)
            shutil.move(full_path, target_path)

    print(f"=== {'預覽模式（尚未真的搬移，DRY_RUN=True）' if DRY_RUN else '已執行搬移'} ===\n")
    print(f"符合規則、{'將會' if DRY_RUN else '已經'}搬移：{len(moved)} 個檔案")
    for old, new in moved:
        print(f"  {old}  ->  images/{new}")

    if unmatched:
        print(f"\n無法辨識、跳過的檔案：{len(unmatched)} 個（不是錯誤，只是對不到任何已知 ID，麻煩自己確認）")
        for f in unmatched:
            print(f"  {f}")

    if skipped:
        print(f"\n非 .png 檔案，略過：{len(skipped)} 個")
        for f in skipped:
            print(f"  {f}")

    if DRY_RUN:
        print("\n這是預覽結果，還沒有真的搬動任何檔案。")
        print("確認上面清單沒問題後，把腳本裡的 DRY_RUN 改成 False，再執行一次。")

if __name__ == "__main__":
    main()