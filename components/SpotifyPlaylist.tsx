import React from "react";

const SpotifyPlaylist = ({ playlistUrl }) => {
    return (
        <div id="music">
            <h2 className='py-8 text-blue-600 flex justify-center'>Some music I like</h2>
            <div className="flex justify-center items-center w-full h-full p-4">
                <iframe 
                    src={playlistUrl} 
                    width="300" 
                    height="380" 
                    frameBorder="0" 
                    allowTransparency={true}
                    allow="encrypted-media"
                    className="rounded-lg shadow-xl"
                ></iframe>
            </div>
        </div>
    );
};

export default SpotifyPlaylist;
