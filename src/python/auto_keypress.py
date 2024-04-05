"""
pip install pyautogui
pip install keyboard
"""

import pyautogui
import keyboard

pyautogui.PAUSE = 0.05


def a():
    pyautogui.hotkey("ctrl", "a")
    pyautogui.typewrite("100%")
    pyautogui.press("enter")


def b():
    x, y = pyautogui.position()
    pyautogui.moveTo(1071, 267, duration=0.01)
    pyautogui.click()
    pyautogui.moveTo(x, y, duration=0.01)


keyboard.add_hotkey("ctrl+`", a)
keyboard.add_hotkey("ctrl+\\", b)
keyboard.wait()
