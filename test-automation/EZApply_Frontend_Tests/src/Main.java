import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "./src/Selenium/chromedriver");

        //Stuff to make selenium actually work
        //solution found at: https://stackoverflow.com/questions/50642308/webdriverexception-unknown-error-devtoolsactiveport-file-doesnt-exist-while-t
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized");            // open Browser in maximized mode
        options.addArguments("disable-infobars");           // disabling infobars
        options.addArguments("--disable-extensions");       // disabling extensions
        options.addArguments("--disable-gpu");              // applicable to windows os only
        options.addArguments("--disable-dev-shm-usage");    // overcome limited resource problems
        options.addArguments("--no-sandbox");               // Bypass OS security model
        WebDriver driver = new ChromeDriver(options);

        if (invalidUserTest(driver) != 0)
            return;
        if(recruiterLoginTest(driver) != 0)
            return;
        driver.quit();
    }

    private static int invalidUserTest(WebDriver driver) {
        driver.get("http://localhost:3000/");
        WebElement element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[1]/button"));
        element.click();


        //Invalid user test (user doesn't exist)
        try {
            element = driver.findElement(By.xpath("//*[@id=\"email\"]"));        //Find input field
            element.sendKeys("test@yahoo.com");                    //Input an invalid email
            element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
            element.sendKeys("password");                         //Input some password
            element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[3]/button"));
            element.click();

            //Wait 2 seconds for the page to update
            long end = System.currentTimeMillis() + 2000;
            while (System.currentTimeMillis() < end) {
            }

            //Another try/catch to throw a more useful exception
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[2]/div"));
            } catch (Exception e) {
                throw new Exception("FAIL: Invalid User Test");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        System.out.println("PASS: Invalid User Test");
        return 0;
    }

    private static int recruiterLoginTest(WebDriver driver) {
        driver.get("http://localhost:3000/");
        WebElement element;
        try {
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[2]/button"));
                element.click();
                element = driver.findElement(By.xpath("//*[@id=\"email\"]"));       //Find user field
                element.sendKeys("recruiter@email.com");
                element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
                element.sendKeys("password");
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[3]/button"));     //Find submit button
                element.click();                                                                                                //Click submit
            } catch(Exception e) {
                throw new Exception("FAIL: Recruiter Login Test -- Login failed");
            }

            long end = System.currentTimeMillis() + 2000;       //Wait 2 sec for page to load
            while (System.currentTimeMillis() < end) {
            }

            try {
                element = driver.findElement(By.xpath("//*[@id=\"618d577d6948161cbb5c6a44\"]"));   //Find job filter
                element.click();                                                                    //Click job filter
            } catch(Exception e) {
                throw new Exception("FAIL: Recruiter Login Test -- click filter failed");
            }

            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/div/div/a"));  //Find "learn more"
                element.click();                                                                            //Click "learn more"
            } catch(Exception e) {
                throw new Exception("FAIL: Recruiter Login Test -- click \"Learn more\" failed");
            }

            try {
                element = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/div/div"));  //Find email of applicant
            } catch(Exception e) {
                throw new Exception("FAIL: Recruiter Login Test -- could not find applicant email");
            }
        } catch (Exception e) {
            System.out.println(e);
            driver.quit();
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("PASS: Recruiter Login Test");
        return 0;
    }

}