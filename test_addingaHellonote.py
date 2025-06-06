# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestAddingaHellonote():
  def setup_method(self, method):
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')  # Overcome limited resource problems
    options.add_argument('--headless')  # Run in headless mode if you don't need the GUI
    options.add_argument('--disable-gpu')
    options.add_argument('--verbose')
    self.driver = webdriver.Chrome(options=options)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_addingaHellonote(self):
    self.driver.get("http://localhost")
    self.driver.find_element(By.LINK_TEXT, "Add Note").click()
    self.driver.find_element(By.NAME, "title").click()
    self.driver.find_element(By.NAME, "title").send_keys("Hello")
    self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
    WebDriverWait(self.driver, 600).until(expected_conditions.presence_of_element_located((By.CSS_SELECTOR, ".notechild")))
    time.sleep(5)  # Add after page load or before assertion
    assert self.driver.find_element(By.CSS_SELECTOR, "p").text == "1) Hello"
  
