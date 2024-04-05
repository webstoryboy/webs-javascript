export const updateProgressBar = () => {
    document.addEventListener('scroll', function () {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector('.progress-bar').style.width = scrolled + "%";
    });
};