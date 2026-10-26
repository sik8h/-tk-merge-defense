from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    cwd = os.getcwd()
    page.goto(f"file://{cwd}/index.html")
    page.wait_for_timeout(2000)

    # Click continue game in lobby
    page.click("#continue-game-btn")
    page.wait_for_timeout(1000)

    # Click recruit buttons
    page.click("#recruit-btn")
    page.wait_for_timeout(500)
    page.click("#recruit-btn")
    page.wait_for_timeout(500)
    page.click("#recruit-btn")
    page.wait_for_timeout(500)

    # Click Camera preset toggles
    page.click("#cam-btn") # Blueprint top view
    page.wait_for_timeout(1000)

    page.click("#cam-btn") # Gate 1st person view
    page.wait_for_timeout(1000)

    page.click("#cam-btn") # Isometric 3D view
    page.wait_for_timeout(1000)

    # Trigger skill
    page.click("#skill-btn")
    page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/verification_3d_final.png")
    page.wait_for_timeout(1500)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--use-gl=angle"])
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 480, 'height': 853}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
