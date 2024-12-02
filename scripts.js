const videoEl = document.querySelector("#my-video");
let stream = null
const constraints = {
    audio: true,
    video: true
}

const getMicAndCamera = async(e) => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
    } catch {
        console.log("User denied access to constraints");
    }
}

const showMyFeed = e => {
    console.log("showMyFeed is working");
    videoEl.srcObject = stream;
    const tracks = stream.getTracks();
    console.log(tracks);
}

const stopMyFeed = e => {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
        // console.log(track)
        track.stop();
    });
}

document.querySelector("#share").addEventListener("click", e => getMicAndCamera(e));
document.querySelector("#show-video").addEventListener("click", e => showMyFeed(e));
document.querySelector("#stop-video").addEventListener("click", e => stopMyFeed(e));