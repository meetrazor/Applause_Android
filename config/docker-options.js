/**
 * more info: https://webdriver.io/docs/wdio-docker-service.html#dockeroptionshealthcheck
 */
 const healthCheck = {

    url: 'http://localhost:6080',

    maxRetries: 5,

    inspectInterval: 1000,

    startDelay: 240000
};


/**
 * more information: https://github.com/budtmo/docker-android
 * docker run command:
 *      sudo docker run 
 *          --privileged                                            (only for ubuntu OS. This flag allow to use system image x86 for better performance)
 *          -d 
 *          -p 6080:6080 
 *          -p 5554:5554 
 *          -p 5555:5555 
 *          -p 4723:4723 
 *          -e DEVICE="Samsung Galaxy S10" 
 *          -e EMULATOR_ARGS="-gpu swiftshader_indirect -accel on"  (see: https://gist.github.com/JonathanLalou/180c87554d8278b0e6d7)
 *          -e APPIUM=true                                          (see: https://github.com/budtmo/docker-android/blob/master/README_APPIUM_AND_SELENIUM.md) 
 *          antiylia/appium-android-10.0:1.0.0
 */ 
function getDockerOptions(platformVersion, deviceName) {

    return {
      
        image: 'antiylia/appium-android-10.0:1.0.0',

        healthCheck: healthCheck,

        options: {
            // stop container after build run
            rm: true,
            privileged: true,
            d: true,
            e: [
                `DEVICE=${deviceName}`,
                'EMULATOR_ARGS=-gpu swiftshader_indirect -accel on',                
                'APPIUM=true'
             ],
            p: [
                '6080:6080',
                '5554:5554',
                '5555:5555',
                '4723:4723'
            ]            
        }
    };
};

module.exports.getDockerOptions = getDockerOptions;