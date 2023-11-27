const footer = document.getElementsByClassName("footer__content__copyright")[0];

footer.innerHTML = `© <a style="color: #ffffff; text-decoration: none;" href="https://github.com/camicroscope/caMicroscope/commit/316bcc66dbddebca8e054a562993ac309cfb5cbc">2012</a> - ${new Date().getFullYear()} caMicroscope developers (BSD License)`;
