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

        System.out.println("\nEZ Apply Frontend Test Results");
        System.out.println("------------------------------");
        invalidRecruiterTest(driver, "test@yahoo.com", "password");
        invalidJobseekerTest(driver, "test@yahoo.com", "password");
        recruiterLoginTest(driver, "recruiter@email.com", "password");
        jobseekerLoginTest(driver, "seeker@email.com", "password");
        driver.quit();
    }

    private static int invalidRecruiterTest(WebDriver driver, String username, String password) {
        driver.get("http://localhost:3000/");
        WebElement element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[2]/button"));
        element.click();


        //Invalid recruiter test (recruiter doesn't exist)
        try {
            element = driver.findElement(By.xpath("//*[@id=\"email\"]"));        //Find input field
            element.sendKeys(username);                    //Input an invalid email
            element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
            element.sendKeys(password);                         //Input some password
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
                throw new Exception("FAIL for (" + username + ", " + password + "): Invalid Recruiter Test");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        System.out.println("PASS for (" + username + ", " + password + "): Invalid Recruiter Test");
        return 0;
    }

    private static int invalidJobseekerTest(WebDriver driver, String username, String password) {
        driver.get("http://localhost:3000/");
        WebElement element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[1]/button"));
        element.click();


        //Invalid jobseeker test (jobseeker doesn't exist)
        try {
            element = driver.findElement(By.xpath("//*[@id=\"email\"]"));        //Find input field
            element.sendKeys(username);                    //Input an invalid email
            element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
            element.sendKeys(password);                         //Input some password
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
                throw new Exception("FAIL for (" + username + ", " + password + "): Invalid Jobseeker Test");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        System.out.println("PASS for (" + username + ", " + password + "): Invalid Jobseeker Test");
        return 0;
    }

    private static int recruiterLoginTest(WebDriver driver, String username, String password) {
        driver.get("http://localhost:3000/");
        WebElement element;
        try {
            //Login as recruiter
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[2]/button"));
                element.click();
                element = driver.findElement(By.xpath("//*[@id=\"email\"]"));       //Find user field
                element.sendKeys(username);
                element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
                element.sendKeys(password);
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[3]/button"));     //Find submit button
                element.click();                                                                                                //Click submit
                long end = System.currentTimeMillis() + 2000;       //Wait 2 sec for page to load
                while (System.currentTimeMillis() < end) {
                }
                element = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/h3")); //Check for dashboard element, if not found login failed
            } catch(Exception e) {
                throw new Exception("FAIL for (" + username + ", " + password + "): Recruiter Login Test -- Login failed");
            }

            //Click job filter
            try {
                element = driver.findElement(By.xpath("//*[@id=\"618d577d6948161cbb5c6a44\"]"));   //Find job filter
                element.click();                                                                    //Click job filter
            } catch(Exception e) {
                throw new Exception("FAIL for (" + username + ", " + password + "): Recruiter Login Test -- click filter failed");
            }

            //Click learn more
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/div/div/a"));  //Find "learn more"
                element.click();                                                                            //Click "learn more"
            } catch(Exception e) {
                throw new Exception("FAIL for (" + username + ", " + password + "): Recruiter Login Test -- click \"Learn more\" failed");
            }

            //Check for email of applicant
            try {
                element = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/div/div"));  //Find email of applicant
            } catch(Exception e) {
                throw new Exception("FAIL for (" + username + ", " + password + "): Recruiter Login Test -- could not find applicant email");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("PASS for (" + username + ", " + password + "): Recruiter Login/dashboard/filter/\"learn more\" Test");
        return 0;
    }

    private static int jobseekerLoginTest(WebDriver driver, String username, String password) {
        driver.get("http://localhost:3000/");
        WebElement element;

        try {
            //Login jobseeker
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[1]/button"));
                element.click();
                element = driver.findElement(By.xpath("//*[@id=\"email\"]"));       //Find user field
                element.sendKeys(username);
                element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
                element.sendKeys(password);
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[3]/button"));     //Find submit button
                element.click();                                                                                                //Click submit
                long end = System.currentTimeMillis() + 1000;       //Wait 1 second for page to fully load
                while (System.currentTimeMillis() < end) {
                }
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div/div/div[5]/div[3]/div/div/img")); //Check for dashboard element, if not found login failed
            } catch (Exception e) {
                throw new Exception("FAIL for (" + username + ", " + password + "): Jobseeker Login Test -- Login failed");
            }

            //Click the Learn more
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div/div/div[5]/div[2]/div/a"));
                element.click();
            }catch(Exception e){
                throw new Exception("FAIL for (" + username + ", " + password + "): Jobseeker Login Test -- click \"Learn more\" failed");
            }

            //Check learn more job title
            try {
                element = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/div/h2"));
            }catch(Exception e){
                throw new Exception("FAIL for (" + username + ", " + password + "): Jobseeker Login Test -- Unable to find job title in \"Learn more\"");
            }

        }catch(Exception e)
        {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("PASS for (" + username + ", " + password + "): Jobseeker Login/dashboard/\"learn more\" Test");
        return 0;
    }
}