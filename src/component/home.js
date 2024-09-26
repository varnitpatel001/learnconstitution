import React, { useRef, useState } from 'react';
import './styles.css'; // Import the scoped CSS file

// Import images
import constitutionImage from './images/constitution.jpeg';
import libertyImage from './images/libertiy.jpeg';
import stateImage from './images/state.jpeg';
import parliamentImage from './images/parliment.jpeg';
import judiciaryImage from './images/lady.jpeg';

// Import audio files
import constitutionAudio from './audio/premebleaudio.mp3';
import libertyAudio from './audio/rightsaudio.mp3';
import stateAudio from './audio/directiveAudio.mp3';
import parliamentAudio from './audio/parliamentAudio.mp3';
import judiciaryAudio from './audio/judicaryaudio.mp3';

const Home = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Audio references
  const constitutionRef = useRef(null);
  const libertyRef = useRef(null);
  const stateRef = useRef(null);
  const parliamentRef = useRef(null);
  const judiciaryRef = useRef(null);

  // Play audio if enabled
  const handlePlayAudio = (audioRef) => {
    if (isAudioEnabled) {
      audioRef.current.play();
    }
  };

  // Stop and reset audio
  const handleStopAudio = (audioRef) => {
    if (isAudioEnabled) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  };

  // Enable audio when the button is clicked
  const enableAudio = () => {
    setIsAudioEnabled(true);
  };

  return (
    <div className="home-page">
      {/* Render Enable Audio button if audio is disabled */}
      {!isAudioEnabled && (
        <button className="audio-btn" onClick={enableAudio}>
          Enable Audio
        </button>
      )}

      {/* Testimonial Grid */}
      <main className="testimonial-grid">
        {/* Testimonial 1 - The Preamble */}
        <article
          className="testimonial flow bg-primary-400 quote text-neutral-100"
          onMouseEnter={() => handlePlayAudio(constitutionRef)}
          onMouseLeave={() => handleStopAudio(constitutionRef)}
        >
          <audio ref={constitutionRef} src={constitutionAudio}></audio>
          <div className="flex">
            <img src={constitutionImage} alt="Constitution of India" />
            <div>
              <h2 className="name">The Preamble</h2>
              <p className="position">Core of the Constitution</p>
            </div>
          </div>
          <p>
            The Preamble serves as an introduction to the Constitution of India, reflecting the vision and values of the nation.
          </p>
          <p>
            “We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens: Justice, Liberty, Equality, and Fraternity.”
          </p>
        </article>

        {/* Testimonial 2 - Fundamental Rights */}
        <article
          className="testimonial flow bg-secondary-400 text-neutral-100"
          onMouseEnter={() => handlePlayAudio(libertyRef)}
          onMouseLeave={() => handleStopAudio(libertyRef)}
        >
          <audio ref={libertyRef} src={libertyAudio}></audio>
          <div className="flex">
            <img src={libertyImage} alt="Fundamental Rights" />
            <div>
              <h2 className="name">Fundamental Rights</h2>
              <p className="position">Part III of the Constitution</p>
            </div>
          </div>
          <p>
            The Fundamental Rights guarantee civil liberties to all citizens of India.
          </p>
          <p>
            “These rights ensure the protection of individual freedoms and the rule of law, preventing the arbitrary use of power by the government.”
          </p>
        </article>

        {/* Testimonial 3 - Directive Principles */}
        <article
          className="testimonial flow bg-secondary-500 text-neutral-100"
          onMouseEnter={() => handlePlayAudio(stateRef)}
          onMouseLeave={() => handleStopAudio(stateRef)}
        >
          <audio ref={stateRef} src={stateAudio}></audio>
          <div className="flex">
            <img src={stateImage} alt="Directive Principles" />
            <div>
              <h2 className="name">Directive Principles</h2>
              <p className="position">Part IV of the Constitution</p>
            </div>
          </div>
          <p>
            Guidelines for the governance of the country.
          </p>
          <p>
            “The Directive Principles aim to establish social and economic democracy and ensure the well-being of the people.”
          </p>
        </article>

        {/* Testimonial 4 - The Parliament */}
        <article
          className="testimonial flow bg-primary-400 text-neutral-100"
          onMouseEnter={() => handlePlayAudio(parliamentRef)}
          onMouseLeave={() => handleStopAudio(parliamentRef)}
        >
          <audio ref={parliamentRef} src={parliamentAudio}></audio>
          <div className="flex">
            <img src={parliamentImage} alt="Parliament" />
            <div>
              <h2 className="name">The Parliament</h2>
              <p className="position">Supreme Legislative Body</p>
            </div>
          </div>
          <p>
            The supreme legislative body responsible for framing laws and governing the country.
          </p>
          <p>
            “The Parliament is the bedrock of Indian democracy, upholding constitutional values and ensuring the implementation of laws that protect the rights and duties of citizens.”
          </p>
        </article>

        {/* Testimonial 5 - The Judiciary */}
        <article
          className="testimonial flow bg-secondary-400 text-neutral-100"
          onMouseEnter={() => handlePlayAudio(judiciaryRef)}
          onMouseLeave={() => handleStopAudio(judiciaryRef)}
        >
          <audio ref={judiciaryRef} src={judiciaryAudio}></audio>
          <div className="flex">
            <img src={judiciaryImage} alt="Judiciary" />
            <div>
              <h2 className="name">The Judiciary</h2>
              <p className="position">Guardian of the Constitution</p>
            </div>
          </div>
          <p>
            The Judiciary plays a crucial role in interpreting the Constitution and safeguarding the rights of citizens.
          </p>
          <p>
            “The judiciary ensures that the principles of justice, equality, and liberty are upheld in the country. It acts as the custodian of the Constitution, interpreting and enforcing the laws.”
          </p>
        </article>
      </main>
    </div>
  );
};

export default Home;
