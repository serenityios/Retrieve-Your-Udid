function cleanUrl() {
    let currentUrl = window.location.href;
    const cleanUrl = currentUrl.split("/?")[0];
    if (currentUrl !== cleanUrl) {
        window.location.href = cleanUrl;
    }
}

async function postRequest() {
    try {
        const currentUrl = window.location.href;
        const response = await fetch('https://udid.s0n1c.ca/setup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                redirect_url: currentUrl,
                message: 'Hello, World!'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseText = await response.text();
        const configFileUrl = 'data:application/x-apple-aspen-config;charset=utf-8,' + encodeURIComponent(responseText);
        window.location.href = configFileUrl;

    } catch (error) {
        alert("Error: " + error.message);
    }
}

function saveDeviceInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const deviceBase64 = urlParams.get('device');
    if (deviceBase64) {
        const decodedData = atob(deviceBase64);
        try {
            const deviceInfo = JSON.parse(decodedData);
            localStorage.setItem('deviceInfo', JSON.stringify(deviceInfo));
        } catch (error) {}
    }
}

function showSavedDeviceInfo() {
    const savedDeviceInfo = localStorage.getItem('deviceInfo');
    if (savedDeviceInfo) {
        const deviceInfo = JSON.parse(savedDeviceInfo);
        alert(JSON.stringify(deviceInfo, null, 2));
    }
}

window.onload = function() {
    saveDeviceInfo();
    cleanUrl();
};
