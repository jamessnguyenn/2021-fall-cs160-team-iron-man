import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

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

        //Recruiter test
        invalidRecruiterTest(driver, "test@yahoo.com", "password");
        invalidRecruiterTest(driver, "recruiter@email.com", "wrongPassword");
        recruiterFrontendTest(driver, "recruiter@email.com", "password");
        recruiterLogoutTest(driver,"recruiter@email.com", "password");

        //Jobseeker tests
        invalidJobseekerTest(driver, "test@yahoo.com", "password");
        invalidJobseekerTest(driver, "seeker@email.com", "wrongPassword");
        jobseekerFrontendTest(driver, "seeker@email.com", "password");
        jobseekerLogoutTest(driver, "seeker@email.com", "password");

        //2.x & 3.x tests
        jobSeekerSignUpTest(driver);
        recruiterSignUpTest(driver);


        driver.quit();
    }

    private static int invalidRecruiterTest(WebDriver driver, String username, String password) {
        System.out.println("Invalid Recruiter Test (" + username + ", " + password + ")");
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
                element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                if(element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    System.out.println("\t\tEmail Border color: " + element.getCssValue("border-color"));
                else
                    throw new Exception("FAIL for (" + username + ", " + password + "): Email border color NOT rgb(220, 53, 69)\n");
                element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                if(element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    System.out.println("\t\tPassword Border color: " + element.getCssValue("border-color"));
                else
                    throw new Exception("FAIL for (" + username + ", " + password + "): Password border color NOT rgb(220, 53, 69)\n");
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[2]/div"));
                System.out.println("\t\t\"Invalid email or password\" message found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Invalid Recruiter Test\n");
            }

        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        System.out.println("\tPASS for (" + username + ", " + password + "): Invalid Recruiter Test\n");
        return 0;
    }

    private static int invalidJobseekerTest(WebDriver driver, String username, String password) {
        System.out.println("Invalid Jobseeker Test (" + username + ", " + password + ")");
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
                element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                if(element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    System.out.println("\t\tEmail Border color: " + element.getCssValue("border-color"));
                else
                    throw new Exception("FAIL for (" + username + ", " + password + "): Email border color NOT rgb(220, 53, 69)\n");
                element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                if(element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    System.out.println("\t\tPassword Border color: " + element.getCssValue("border-color"));
                else
                    throw new Exception("FAIL for (" + username + ", " + password + "): Password border color NOT rgb(220, 53, 69)\n");
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[2]/div"));
                System.out.println("\t\t\"Invalid email or password\" message found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Invalid Jobseeker Test\n");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        System.out.println("\tPASS for (" + username + ", " + password + "): Invalid Jobseeker Test\n");
        return 0;
    }

    private static int recruiterFrontendTest(WebDriver driver, String username, String password) {
        System.out.println("Recruiter Frontend Test (" + username + ", " + password + ")");
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
                System.out.println("\t\tDashboard element found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Frontend Test -- Login failed\n");
            }

            //Click job filter
            try {
                element = driver.findElement(By.xpath("//*[@id=\"618d577d6948161cbb5c6a44\"]"));   //Find job filter
                element.click();                                                                    //Click job filter
                System.out.println("\t\tClicked job filter");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Frontend Test -- click filter failed\n");
            }

            //Click learn more
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/div/div/a"));  //Find "learn more"
                element.click();                                                                            //Click "learn more"
                System.out.println("\t\tClicked \"learn more\" on applicant card");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Frontend Test -- click \"Learn more\" failed\n");
            }

            //Check for email of applicant
            try {
                element = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/div/div"));  //Find email of applicant
                System.out.println("\t\tApplicant email found in \"learn more\"");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Frontend Test -- could not find applicant email\n");
            }
        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("\tPASS for (" + username + ", " + password + "): Recruiter Frontend Test (login/filter/talent \"Learn more\")\n");
        return 0;
    }

    private static int jobseekerFrontendTest(WebDriver driver, String username, String password) {
        System.out.println("Jobseeker Frontend Test (" + username + ", " + password + ")");
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
                element = driver.findElement(By.xpath("/html/body/div/nav/div/div/a[1]")); //Check for dashboard element, if not found login failed
                System.out.println("\t\tDashboard element found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Frontend Test -- Login failed\n");
            }

            //Click the Learn more
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[5]/div[2]/div/div"));
                element.click();
                System.out.println("\t\tClicked learn more for job listing in queue");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Frontend Test -- click \"Learn more\" failed\n");
            }

            //Check learn more job title
            try {
                element = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/div/h2"));
                System.out.println("\t\tFound job title in \"learn more\"");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Frontend Test -- Unable to find job title in \"Learn more\"\n");
            }

        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("\tPASS for (" + username + ", " + password + "): Jobseeker Frontend Test (Login/dashboard/Job \"learn more\")\n");
        return 0;
    }

    private static int jobseekerLogoutTest(WebDriver driver, String username, String password) {
        System.out.println("Jobseeker Logout Test (" + username + ", " + password + ")");
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
                element = driver.findElement(By.xpath("/html/body/div/nav/div/div/a[1]")); //Check for dashboard element, if not found login failed
                System.out.println("\t\tDashboard element found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Login Test -- Login failed\n");
            }

            //Click name for dropdown menu
            try {
                element = driver.findElement(By.xpath("/html/body/div/nav/div/div/div/button/div"));
                element.click();
                System.out.println("\t\tFound and clicked name button");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Logout Test -- Name button click failed\n");
            }

            //Click logout button
            try {
                element = driver.findElement(By.xpath("/html/body/div/nav/div/div/div/div/a[2]"));
                element.click();
                System.out.println("\t\tFound and clicked logout button");
            } catch (Exception e) {
                throw new Exception("\nFAIL for (" + username + ", " + password + "): Jobseeker Logout Test -- Logout button click failed\n");
            }

            //Return to landing page
            try {
                long end = System.currentTimeMillis() + 1000;       //Wait 1 second for page to fully load
                while (System.currentTimeMillis() < end) {
                }
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[1]/h1"));
                System.out.println("\t\tReturned to landing page");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Jobseeker Logout Test -- Did not return to landing page\n");
            }

        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("\tPASS for (" + username + ", " + password + "): Jobseeker Logout Test (login/name dropdown menu/logout button)\n");
        return 0;
    }

    private static int recruiterLogoutTest(WebDriver driver, String username, String password) {
        System.out.println("Recruiter Logout Test (" + username + ", " + password + ")");
        driver.get("http://localhost:3000/");
        WebElement element;

        try {
            //Login recruiter
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[2]/button"));
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
                element = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/h3")); //Check for dashboard element, if not found login failed
                System.out.println("\t\tDashboard element found");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Login Test -- Login failed\n");
            }

            //Click name for dropdown menu
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/nav/div/div/div/button/div"));
                element.click();
                System.out.println("\t\tFound and clicked name button");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Logout Test -- Name button click failed\n");
            }

            //Click logout button
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/nav/div/div/div/div/a[2]"));
                element.click();
                System.out.println("\t\tFound and clicked logout button");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Logout Test -- Logout button click failed\n");
            }

            //Return to landing page
            try {
                long end = System.currentTimeMillis() + 1000;       //Wait 1 second for page to fully load
                while (System.currentTimeMillis() < end) {
                }
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[1]/h1"));
                System.out.println("\t\tReturned to landing page");
            } catch (Exception e) {
                throw new Exception("\tFAIL for (" + username + ", " + password + "): Recruiter Logout Test -- Did not return to landing page\n");
            }

        } catch (Exception e) {
            System.out.println(e);
            return -1;
        }

        long end = System.currentTimeMillis() + 1000;       //Wait 1 second before closing
        while (System.currentTimeMillis() < end) {
        }
        System.out.println("\tPASS for (" + username + ", " + password + "): Recruiter Logout Test (login/name dropdown menu/logout button)\n");
        return 0;
    }

    private static int jobSeekerSignUpTest(WebDriver driver) {
        System.out.println("Jobseeker Sign-Up Tests");
        WebElement element;

        try {
            //Test 2.1
            {
                    try {
                        driver.get("http://localhost:3000/jobseeker/signup");
                        element = driver.findElement(By.xpath("//*[@id=\"firstName\"]"));
                        element.sendKeys("Jake");
    //                System.out.println("\t\tInputted F.Name: Jake");
                        element = driver.findElement(By.xpath("//*[@id=\"lastName\"]"));
                        element.sendKeys("Paul");
    //                System.out.println("\t\tInputted L.Name: Paul");
                        element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                        element.sendKeys("hello2322@gmail.com");
    //                System.out.println("\t\tInputted Email: hello2322@gmail.com");
                        element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                        element.sendKeys("hello123");
    //                System.out.println("\t\tInputted Password: hello123");
                        element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                        element.sendKeys("hello123");
    //                System.out.println("\t\tInputted Confirm Password: hello123");
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                        element.click();
    //                System.out.println("\t\tClicked continue");

                        long end = System.currentTimeMillis() + 1000;       //Wait 2 second for page to fully load
                        while (System.currentTimeMillis() < end) {
                        }

                        try {
                            element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/h1"));
                        }
                        catch(Exception e)
                        {
                            System.out.println("Failed to navigate to next step");
                        }
    //                System.out.println("\t\tNavigated to next step");

                        //Check for empty/default input fields

                        //Check address
                        element = driver.findElement(By.xpath("//*[@id=\"address\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tAddress input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"apt\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tApartment,studio... input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"city\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tCity input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"state\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tState dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"zip\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tZipcode input not empty");
                            throw new Exception();
                        }

                        element = driver.findElement(By.xpath("//*[@id=\"addWork1\"]"));
                        element.click();
                        element = driver.findElement(By.xpath("//*[@id=\"addWork1\"]"));
                        element.click();

                        //Check work 1
                        element = driver.findElement(By.xpath("//*[@id=\"position\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 Position input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"company\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 Company input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"checkWork\"]"));
                        if (element.isSelected()) {
                            System.out.println("\t\tWork1 \"I currently work here\" checkbox selected");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"startDateMonth\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 Start Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"startDateYear\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 Start year Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"endDateMonth\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 End Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"endDateYear\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork1 End Year Dropdown not default");
                            throw new Exception();
                        }

                        //Check work 2
                        element = driver.findElement(By.xpath("//*[@id=\"position2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 Position input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"company2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 Company input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"checkWork2\"]"));
                        if (element.isSelected()) {
                            System.out.println("\t\tWork2 \"I currently work here\" checkbox selected");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"startDateMonth2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 Start Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"startDateYear2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 Start year Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"endDateMonth2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 End Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"endDateYear2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWork2 End Year Dropdown not default");
                            throw new Exception();
                        }

                        //Check websites
                        element = driver.findElement(By.xpath("//*[@id=\"web1\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWebsite1 input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"web2\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWebsite2 input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"web3\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tWebsite3 input not empty");
                            throw new Exception();
                        }

                        //Check education
                        element = driver.findElement(By.xpath("//*[@id=\"school\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tSchool input not empty");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"schoolEndDateMonth\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tSchool Grad Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"schoolEndDateYear\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tSchool Grad Month Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"degree\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tSchool Degree Dropdown not default");
                            throw new Exception();
                        }
                        element = driver.findElement(By.xpath("//*[@id=\"field\"]"));
                        if (!element.getAttribute("value").equals("")) {
                            System.out.println("\t\tField of study input not empty");
                            throw new Exception();
                        }
                        System.out.println("\tPASS for (F.Name: Jake, L.Name: Paul Email: hello2322@gmail.com, Password/confirm: hello123) in test 2.1");
                    } catch (Exception e) {
                        System.out.println("\tFAIL for (F.Name: Jake, L.Name: Paul Email: hello2322@gmail.com, Password/confirm: hello123) in test 2.1");
                        throw new Exception();
                    }
            }
            //Test 2.2
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second for page to fully load
                    while (System.currentTimeMillis() < end) {
                    }

                    //First name
                    element = driver.findElement(By.xpath("//*[@id=\"firstName\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tF.Name input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[1]/div[1]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tF.Name error message not found");
                        throw new Exception();
                    }

                    //Last name
                    element = driver.findElement(By.xpath("//*[@id=\"lastName\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tL.Name input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[1]/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }

                    //Email
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }

                    //Password
                    element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tPassword input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[3]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tPassword error message not found");
                        throw new Exception();
                    }

                    //Confirm Password
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tConfirm Password input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[4]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tConfirm Password error message not found");
                        throw new Exception();
                    }

                    System.out.println("\tPASS for (Blank Inputs) in test 2.2");
                } catch (Exception e) {
                    System.out.println("\tFAIL for (Blank Inputs) in test 2.2");
                    throw new Exception();
                }
            }
            //Test 2.3
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmailcom");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmailcom) in test 2.3");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmailcom) in test 2.3");
                    throw new Exception();
                }
            }
            //Test 2.4
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hellogmail.com");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hellogmail.com) in test 2.4");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hellogmail.com) in test 2.4");
                    throw new Exception();
                }
            }
            //Test 2.5
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmail.");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmail.) in test 2.5");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmail.) in test 2.5");
                    throw new Exception();
                }
            }
            //Test 2.6
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmail.c");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmail.c) in test 2.6");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmail.c) in test 2.6");
                    throw new Exception();
                }
            }
            //Test 2.7
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("@gmail.com");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: @gmail.com) in test 2.7");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: @gmail.com) in test 2.7");
                }
            }
            //Test 2.8
            {
                driver.get("http://localhost:3000/jobseeker/signup");
                try {

                    element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                    element.sendKeys("hello123");
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    element.sendKeys("hsad2");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    //Confirm Password
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tConfirm Password input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[4]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tConfirm Password error message not found");
                        throw new Exception();
                    }

                    System.out.println("\tPASS for (password: hello123, confirm password: hsad2) in test 2.8");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (password: hello123, confirm password: hsad2) in test 2.8");
                    throw new Exception();
                }
            }
        }catch(Exception e) {
            System.out.println("\tFAIL - JobSeeker Signup Test (2.x)\n");
        }
        System.out.println("\tALL PASS - JobSeeker Signup Test (2.x)\n");
        return 0;
    }

    private static int recruiterSignUpTest(WebDriver driver) {
        System.out.println("Recruiter Sign-Up Tests");
        WebElement element;

        try {
            //Test 3.1
            {
                try {
                    driver.get("http://localhost:3000/recruiter/signup");
                    element = driver.findElement(By.xpath("//*[@id=\"firstName\"]"));
                    element.sendKeys("Jake");
                    element = driver.findElement(By.xpath("//*[@id=\"lastName\"]"));
                    element.sendKeys("Paul");
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello2322@gmail.com");
                    element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                    element.sendKeys("hello123");
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    element.sendKeys("hello123");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 2 second for page to fully load
                    while (System.currentTimeMillis() < end) {
                    }

                    try {
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/h1"));
                    } catch (Exception e) {
                        System.out.println("Failed to navigate to next step");
                    }

                    //check Company name
                    element = driver.findElement(By.xpath("//*[@id=\"company\"]"));
                    if (!element.getAttribute("value").equals("")) {
                        System.out.println("\t\tCompany Name input not empty");
                        throw new Exception();
                    }

                    //check Company description
                    element = driver.findElement(By.xpath("//*[@id=\"description\"]"));
                    if (!element.getAttribute("value").equals("")) {
                        System.out.println("\t\tCompany description input not empty");
                        throw new Exception();
                    }

                    //check Company logo link
                    element = driver.findElement(By.xpath("//*[@id=\"logoLink\"]"));
                    if (!element.getAttribute("value").equals("")) {
                        System.out.println("\t\tCompany Logo Link input not empty");
                        throw new Exception();
                    }

                    //check Company website
                    element = driver.findElement(By.xpath("//*[@id=\"website\"]"));
                    if (!element.getAttribute("value").equals("")) {
                        System.out.println("\t\tCompany Website input not empty");
                        throw new Exception();
                    }

                    System.out.println("\tPASS for (F.Name: Jake, L.Name: Paul Email: hello2322@gmail.com, Password/confirm: hello123) in test 3.1");
                } catch (Exception e) {
                    System.out.println("\tFAIL for (F.Name: Jake, L.Name: Paul Email: hello2322@gmail.com, Password/confirm: hello123) in test 3.1");
                    throw new Exception();
                }
            }
            //Test 3.2
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second for page to fully load
                    while (System.currentTimeMillis() < end) {
                    }

                    //First name
                    element = driver.findElement(By.xpath("//*[@id=\"firstName\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tF.Name input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[1]/div[1]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tF.Name error message not found");
                        throw new Exception();
                    }

                    //Last name
                    element = driver.findElement(By.xpath("//*[@id=\"lastName\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tL.Name input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[1]/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }

                    //Email
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }

                    //Password
                    element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tPassword input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[3]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tPassword error message not found");
                        throw new Exception();
                    }

                    //Confirm Password
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tConfirm Password input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[4]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tConfirm Password error message not found");
                        throw new Exception();
                    }

                    System.out.println("\tPASS for (Blank Inputs) in test 3.2");
                } catch (Exception e) {
                    System.out.println("\tFAIL for (Blank Inputs) in test 3.2");
                    throw new Exception();
                }
            }
            //Test 3.3
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmailcom");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmailcom) in test 3.3");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmailcom) in test 3.3");
                    throw new Exception();
                }
            }
            //Test 3.4
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hellogmail.com");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hellogmail.com) in test 3.4");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hellogmail.com) in test 3.4");
                    throw new Exception();
                }
            }
            //Test 3.5
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmail.");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmail.) in test 3.5");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmail.) in test 3.5");
                    throw new Exception();
                }
            }
            //Test 3.6
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("hello@gmail.c");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: hello@gmail.c) in test 3.6");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: hello@gmail.c) in test 3.6");
                    throw new Exception();
                }
            }
            //Test 3.7
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {
                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    element.sendKeys("@gmail.com");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    element = driver.findElement(By.xpath("//*[@id=\"email\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tEmail input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[2]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tL.Name error message not found");
                        throw new Exception();
                    }
                    System.out.println("\tPASS for (email: @gmail.com) in test 3.7");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (email: @gmail.com) in test 3.7");
                }
            }
            //Test 3.8
            {
                driver.get("http://localhost:3000/recruiter/signup");
                try {

                    element = driver.findElement(By.xpath("//*[@id=\"password\"]"));
                    element.sendKeys("hello123");
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    element.sendKeys("hsad2");
                    element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[5]/button"));
                    element.click();

                    long end = System.currentTimeMillis() + 1000;       //Wait 1 second
                    while (System.currentTimeMillis() < end) {
                    }

                    //Confirm Password
                    element = driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]"));
                    if(!element.getCssValue("border-color").toString().equals("rgb(220, 53, 69)"))
                    {
                        System.out.println("\t\tConfirm Password input border not rgb(220, 53, 69)");
                        throw new Exception();
                    }
                    try{
                        element = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/form/div[4]/div"));
                    } catch(Exception e) {
                        System.out.println("\t\tConfirm Password error message not found");
                        throw new Exception();
                    }

                    System.out.println("\tPASS for (password: hello123, confirm password: hsad2) in test 3.8");
                }catch(Exception e)
                {
                    System.out.println("\tFAIL for (password: hello123, confirm password: hsad2) in test 3.8");
                    throw new Exception();
                }
            }
        } catch (Exception e) {
            System.out.println("\tFAIL - Recruiter Signup Test (3.x)\n");
        }
        System.out.println("\tALL PASS - Recruiter Signup Test (3.x)\n");
        return 0;
    }
}

/*
    NOTES:

        --Dropdown selection--
        Select state = new Select(driver.findElement(By.xpath("//*[@id=\"state\"]")));
        state.selectByVisibleText("Alabama");
 */