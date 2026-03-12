// /js/resources_config.js

/**
 * MEDUCA English Resources - External Resources Configuration
 *
 * Este archivo permite añadir recursos adicionales sin modificar los JSON base.
 * Solo necesitas editar este archivo y recargar la PWA.
 */

const EXTERNAL_RESOURCES_CONFIG = {
  version: '2.0.0',
  lastUpdated: '2026-02-18',

  grades: {

    // =========================================================
    // PRE-K | Foundational Learner – Pre A1.1
    // =========================================================
    pre_k: {

      // SCENARIO 1: Meeting New Friends
      // Themes: Meeting My Friends | Saying Please and Thank You
      scenario_1_meeting_new_friends: {
        listening: [
          {
            id: 'ext_prek_s1_l_001',
            title: 'Super Simple Songs - Hello!',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=tVlcKp3bO88',
            type: 'song',
            standard: 'Receptive: Recognize that people are speaking in English',
            outcome: 'Can recognize their name when called in English and polite words like "please" and "thank you"',
            duration: '1:38'
          },
          {
            id: 'ext_prek_s1_l_002',
            title: 'Super Simple Songs - Bye Bye Goodbye',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Interactive: Respond to basic greetings',
            outcome: 'Can respond to greetings and polite words in English, such as "hello," "goodbye," "please," and "thank you"',
            duration: '1:48'
          },
          {
            id: 'ext_prek_s1_l_003',
            title: 'Pinkfong - Baby Shark',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=XqZsoesa55w',
            type: 'song',
            standard: 'Receptive: Recognize that people are speaking in English',
            outcome: 'Can follow basic instructions paired with gestures, such as "say hello" and "wave"',
            duration: '2:17'
          },
          {
            id: 'ext_prek_s1_l_004',
            title: 'Starfall - ABCs Interactive',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abc/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify environmental sounds and speech sounds',
            outcome: 'Can identify the source of an environmental or speech sound related to classroom routines or stories when supported with pictures',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s1_l_005',
            title: 'Cocomelon - Please and Thank You Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=tvNEqRkL6Jo',
            type: 'song',
            standard: 'Receptive: Recognize that people are speaking in English',
            outcome: 'Can recognize their name when called in English and polite words like "please" and "thank you"',
            duration: '3:15'
          },
          {
            id: 'ext_prek_s1_l_006',
            title: 'Jack Hartmann - Greetings Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=gVIFEVLzP4o',
            type: 'song',
            standard: 'Interactive: Respond to basic greetings',
            outcome: 'Can respond to greetings and polite words in English, such as "hello," "goodbye," "please," and "thank you"',
            duration: '2:30'
          },
          {
            id: 'ext_prek_s1_l_007',
            title: 'Storynory - Audio Stories for Kids',
            source: 'Storynory',
            url: 'https://www.storynory.com/',
            type: 'audio_story',
            standard: 'Interactive: Respond to basic greetings',
            outcome: 'Can respond to greetings and polite words in English, such as "hello," "goodbye," "please," and "thank you"',
            duration: '5:00'
          },
          {
            id: 'ext_prek_s1_l_008',
            title: 'British Council - The Hello Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/the-hello-song',
            type: 'song',
            standard: 'Receptive: Recognize that people are speaking in English',
            outcome: 'Can recognize their name when called in English and polite words like "please" and "thank you"',
            duration: '1:45'
          }
        ],
        speaking: [
          {
            id: 'ext_prek_s1_sp_001',
            title: "Rachel's English - Kids Hello",
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=2p7t-DzagC4',
            type: 'pronunciation_video',
            standard: 'Productive: Use simple words and gestures to communicate',
            outcome: 'Can use simple words and gestures for greetings (e.g., wave to say "hello" or "goodbye")',
            duration: '3:20'
          },
          {
            id: 'ext_prek_s1_sp_002',
            title: 'Tongue Twisters - I Scream You Scream',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/i-scream',
            type: 'tongue_twister',
            standard: 'Productive: Use simple words and gestures to communicate',
            outcome: 'Can introduce oneself using "My name is [name]"',
            duration: '1:00'
          },
          {
            id: 'ext_prek_s1_sp_003',
            title: 'Super Simple Songs - Head Shoulders Knees and Toes',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=lQk9C2w5aTc',
            type: 'action_song',
            standard: 'Interactive: Respond to basic greetings',
            outcome: 'Can respond to basic greetings and polite expressions in simple exchanges',
            duration: '2:20'
          },
          {
            id: 'ext_prek_s1_sp_004',
            title: "Pinkfong - If You're Happy and You Know It",
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'action_song',
            standard: 'Productive: Use simple words and gestures to communicate',
            outcome: 'Can use simple words and gestures for greetings (e.g., wave to say "hello" or "goodbye")',
            duration: '2:05'
          },
          {
            id: 'ext_prek_s1_sp_005',
            title: 'Jack Hartmann - Wave Hello',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'action_song',
            standard: 'Productive: Use simple words and gestures to communicate',
            outcome: 'Can use simple words and gestures for greetings (e.g., wave to say "hello" or "goodbye")',
            duration: '2:15'
          },
          {
            id: 'ext_prek_s1_sp_006',
            title: 'Starfall - Learn to Read - Zac the Rat',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Productive: Use simple words and gestures to communicate',
            outcome: 'Can introduce oneself using "My name is [name]"',
            duration: 'variable'
          }
        ],
        reading: [
          {
            id: 'ext_prek_s1_r_001',
            title: 'British Council - Hello! Read Along',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/short-stories/hello',
            type: 'read_aloud',
            standard: 'Reading: Identify characters in a picture book',
            outcome: 'Can recognize and name main characters in a story about meeting friends and being polite',
            duration: '4:00'
          },
          {
            id: 'ext_prek_s1_r_002',
            title: "Epic! - Elephant and Piggie: We Are in a Book!",
            source: 'Epic',
            url: 'https://www.getepic.com/book/we-are-in-a-book',
            type: 'ebook',
            standard: 'Reading: Identify characters in a picture book',
            outcome: 'Can select the correct picture of a character who says "please" or "thank you" in a familiar story',
            duration: '5:00'
          },
          {
            id: 'ext_prek_s1_r_003',
            title: 'Starfall - Alphabet Sounds',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify environmental sounds and speech sounds',
            outcome: 'Can identify the source of an environmental or speech sound related to classroom routines or stories when supported with pictures',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_prek_s1_w_001',
            title: 'Jack Hartmann - Draw With Me',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'drawing_activity',
            standard: 'Productive: Scribble to communicate a message',
            outcome: 'Can scribble to represent an idea',
            duration: '3:00'
          },
          {
            id: 'ext_prek_s1_w_002',
            title: 'Twinkl - Hello and Goodbye Drawing Worksheet',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/greetings-drawing-activity',
            type: 'worksheet',
            standard: 'Interactive: Draw a symbol or image as a response to something',
            outcome: 'Can draw a simple picture representing themselves or a friend using greetings or polite expressions',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s1_w_003',
            title: 'ABCmouse - Drawing and Tracing Activities',
            source: 'ABCmouse',
            url: 'https://www.abcmouse.com/art',
            type: 'interactive',
            standard: 'Interactive: Draw a symbol or image as a response to something',
            outcome: 'Can draw an image to express a response to peers',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_prek_s1_m_001',
            title: 'Cocomelon - Good Manners Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Mimic simple actions shown in picture books',
            outcome: 'Can mimic body language to convey polite expressions from picture books',
            duration: '2:45'
          },
          {
            id: 'ext_prek_s1_m_002',
            title: 'Super Simple Songs - Action Stories',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=lQk9C2w5aTc',
            type: 'action_story',
            standard: 'Text: Mimic simple actions shown in picture books',
            outcome: 'Can act out simple greetings shown in picture books',
            duration: '3:00'
          }
        ]
      },

      // SCENARIO 2: Exploring Our Classroom
      // Themes: Things in My Classroom | Colors in My Classroom
      scenario_2_exploring_our_classroom: {
        listening: [
          {
            id: 'ext_prek_s2_l_001',
            title: 'Super Simple Songs - I See Something Blue',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Follow very simple classroom instructions after observing a model',
            outcome: 'Can follow simple classroom instructions like "sit" and "stand"',
            duration: '2:10'
          },
          {
            id: 'ext_prek_s2_l_002',
            title: 'The Singing Walrus - Colors Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Engage in acting out and response activities as a way of interaction',
            outcome: 'Can act out and respond to familiar vocabulary used in daily routines',
            duration: '2:45'
          },
          {
            id: 'ext_prek_s2_l_003',
            title: 'Starfall - Colors Interactive',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/colors/',
            type: 'interactive',
            standard: 'Interactive: Engage in acting out and response activities as a way of interaction',
            outcome: 'Can point to objects when named',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s2_l_004',
            title: 'Jack Hartmann - Colors of the Rainbow',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Follow very simple classroom instructions after observing a model',
            outcome: 'Can follow simple classroom instructions like "sit" and "stand"',
            duration: '3:00'
          },
          {
            id: 'ext_prek_s2_l_005',
            title: 'Cocomelon - Clean Up Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Follow very simple classroom instructions after observing a model',
            outcome: 'Can follow simple classroom instructions like "sit" and "stand"',
            duration: '2:30'
          },
          {
            id: 'ext_prek_s2_l_006',
            title: 'British Council - The Colour Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/the-colour-song',
            type: 'song',
            standard: 'Interactive: Engage in acting out and response activities as a way of interaction',
            outcome: 'Can act out and respond to familiar vocabulary used in daily routines',
            duration: '1:50'
          }
        ],
        speaking: [
          {
            id: 'ext_prek_s2_sp_001',
            title: 'Super Simple Songs - I See Something Pink',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'action_song',
            standard: 'Productive: Name primary colors',
            outcome: 'Can identify and name primary colors in classroom objects',
            duration: '2:10'
          },
          {
            id: 'ext_prek_s2_sp_002',
            title: 'Pinkfong - Color Dinosaurs',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Interactive: Participate in a conversation with one or two simple interactions',
            outcome: 'Can participate in a simple "yes" or "no" interaction',
            duration: '2:20'
          },
          {
            id: 'ext_prek_s2_sp_003',
            title: 'Starfall - Make a Word - Colors',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/make-a-word/',
            type: 'interactive',
            standard: 'Interactive: Participate in a conversation with one or two simple interactions',
            outcome: 'Can answer questions about classroom items using a color and a noun',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s2_sp_004',
            title: 'Jack Hartmann - Color Words',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'chant',
            standard: 'Productive: Name primary colors',
            outcome: 'Can identify and name primary colors in classroom objects',
            duration: '2:45'
          },
          {
            id: 'ext_prek_s2_sp_005',
            title: 'Tongue Twisters - Red Lorry Yellow Lorry',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/red-lorry-yellow-lorry',
            type: 'tongue_twister',
            standard: 'Productive: Name primary colors',
            outcome: 'Can identify and name primary colors in classroom objects',
            duration: '1:00'
          },
          {
            id: 'ext_prek_s2_sp_006',
            title: 'The Singing Walrus - Action Songs',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'action_song',
            standard: 'Interactive: Engage in acting out and response activities as a way of interaction',
            outcome: 'Can act out and respond to familiar vocabulary used in daily routines',
            duration: '3:00'
          }
        ],
        reading: [
          {
            id: 'ext_prek_s2_r_001',
            title: 'British Council - Classroom Objects Story',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/short-stories',
            type: 'read_aloud',
            standard: 'Reading: Participate in choral reading of familiar short stories with support',
            outcome: 'Can identify pictures of classroom objects in a story when read aloud',
            duration: '4:00'
          },
          {
            id: 'ext_prek_s2_r_002',
            title: 'Starfall - Alphabet Sounds - Letter Recognition',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify environmental sounds and speech sounds',
            outcome: 'Can match familiar environmental sounds and speech sounds to pictures with support',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s2_r_003',
            title: 'Epic! - A Book of Colors',
            source: 'Epic',
            url: 'https://www.getepic.com/book/a-book-of-colors',
            type: 'ebook',
            standard: 'Reading: Participate in choral reading of familiar short stories with support',
            outcome: 'Can point to characters and objects during choral reading',
            duration: '5:00'
          }
        ],
        writing: [
          {
            id: 'ext_prek_s2_w_001',
            title: 'ABCmouse - Tracing Shapes',
            source: 'ABCmouse',
            url: 'https://www.abcmouse.com/art/drawing',
            type: 'interactive',
            standard: 'Productive: Trace simple shapes and letters',
            outcome: 'Can trace basic shapes and lines to represent classroom objects or ideas',
            duration: 'variable'
          },
          {
            id: 'ext_prek_s2_w_002',
            title: 'Jack Hartmann - Draw and Color Classroom Objects',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'drawing_activity',
            standard: 'Interactive: Draw a symbol or image as a response to something',
            outcome: 'Can draw simple symbols to respond to classroom prompts or questions',
            duration: '3:00'
          }
        ],
        mediation: [
          {
            id: 'ext_prek_s2_m_001',
            title: 'Super Simple Songs - What Color Is It?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Communication: Express feelings and basic needs using words and body language',
            outcome: 'Can use drawings or gestures to help classmates understand classroom items or colors',
            duration: '2:30'
          },
          {
            id: 'ext_prek_s2_m_002',
            title: 'Pinkfong - Classroom Objects Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Communication: Express feelings and basic needs using words and body language',
            outcome: 'Can express a basic classroom need using body language or words',
            duration: '2:15'
          }
        ]
      }
    },

    // =========================================================
    // KINDER | Foundational Learner – Pre A1.2
    // =========================================================
    kinder: {

      // SCENARIO 1: It's a School Day!
      // Themes: Let's Listen! | Stand Up!
      scenario_1_its_a_school_day: {
        listening: [
          {
            id: 'ext_k_s1_l_001',
            title: 'The Singing Walrus - Action Song for Kids',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Receptive: Follow very simple classroom instructions with visual cues',
            outcome: 'Can follow simple instructions with visual cues (e.g., "sit down" with gestures)',
            duration: '2:30'
          },
          {
            id: 'ext_k_s1_l_002',
            title: 'Jack Hartmann - Classroom Rules',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Engage in basic interactive games with instructions',
            outcome: 'Can engage in games by responding to simple questions (e.g., "What is this?" — "School.")',
            duration: '3:00'
          },
          {
            id: 'ext_k_s1_l_003',
            title: 'Super Simple Songs - Listen and Do',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'action_song',
            standard: 'Receptive: Follow very simple classroom instructions with visual cues',
            outcome: 'Can follow visual signals to do tasks (e.g., "clean up" supported with a picture)',
            duration: '2:45'
          },
          {
            id: 'ext_k_s1_l_004',
            title: 'Starfall - School Supplies Interactive',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/school/',
            type: 'interactive',
            standard: 'Interactive: Engage in basic interactive games with instructions',
            outcome: 'Can engage in games by responding to simple questions (e.g., "What is this?" — "School.")',
            duration: 'variable'
          },
          {
            id: 'ext_k_s1_l_005',
            title: 'Cocomelon - School is Fun Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Follow very simple classroom instructions with visual cues',
            outcome: 'Can follow simple instructions with visual cues (e.g., "sit down" with gestures)',
            duration: '2:30'
          },
          {
            id: 'ext_k_s1_l_006',
            title: 'British Council - In My School Bag',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/in-my-school-bag',
            type: 'song',
            standard: 'Interactive: Engage in basic interactive games with instructions',
            outcome: 'Can engage in games by responding to simple questions (e.g., "What is this?" — "School.")',
            duration: '2:00'
          }
        ],
        speaking: [
          {
            id: 'ext_k_s1_sp_001',
            title: 'Jack Hartmann - Classroom Objects Chant',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Productive: Use simple words to express basic needs',
            outcome: 'Can use simple words to name classroom objects they need (e.g., "pen," "book")',
            duration: '2:45'
          },
          {
            id: 'ext_k_s1_sp_002',
            title: 'Super Simple Songs - What Is It?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Engage in question-and-answer exchanges using simple words and gestures',
            outcome: 'Can ask and answer basic questions using simple words or gestures (e.g., "What is it?" — "Table.")',
            duration: '2:20'
          },
          {
            id: 'ext_k_s1_sp_003',
            title: 'Pinkfong - My School Supplies',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Productive: Use simple words to express basic needs',
            outcome: 'Can express basic needs or ideas using simple phrases with teacher support (e.g., "I need a pencil.")',
            duration: '2:30'
          },
          {
            id: 'ext_k_s1_sp_004',
            title: 'Tongue Twisters - She Sells Seashells',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/she-sells-seashells',
            type: 'tongue_twister',
            standard: 'Productive: Use simple words to express basic needs',
            outcome: 'Can use simple words to name classroom objects they need (e.g., "pen," "book")',
            duration: '1:00'
          },
          {
            id: 'ext_k_s1_sp_005',
            title: 'Starfall - Classroom Words Interactive',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Interactive: Engage in question-and-answer exchanges using simple words and gestures',
            outcome: 'Can ask and answer basic questions using simple words or gestures',
            duration: 'variable'
          },
          {
            id: 'ext_k_s1_sp_006',
            title: 'The Singing Walrus - What Do You Need?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Productive: Use simple words to express basic needs',
            outcome: 'Can use simple words to name classroom objects they need (e.g., "pen," "book")',
            duration: '2:30'
          }
        ],
        reading: [
          {
            id: 'ext_k_s1_r_001',
            title: 'Starfall - Learn to Read - Letters and Sounds',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify sounds at the beginning of words',
            outcome: 'Can identify the initial sound of a familiar word when heard, with picture support (e.g., /b/ in "book")',
            duration: 'variable'
          },
          {
            id: 'ext_k_s1_r_002',
            title: 'British Council - School Picture Dictionary',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/word-games/school',
            type: 'interactive',
            standard: 'Reading: Recognize basic familiar words supported with illustrations or visual aids',
            outcome: 'Can recognize familiar words about classroom language supported with pictures (e.g., "window")',
            duration: 'variable'
          },
          {
            id: 'ext_k_s1_r_003',
            title: "Epic! - Pete the Cat: Rocking in My School Shoes",
            source: 'Epic',
            url: 'https://www.getepic.com/book/pete-the-cat-rocking-in-my-school-shoes',
            type: 'ebook',
            standard: 'Reading: Attempt to read basic and familiar words supported with pictures',
            outcome: 'Can attempt to read basic familiar words with picture support during chants, rhymes, or shared reading',
            duration: '5:00'
          }
        ],
        writing: [
          {
            id: 'ext_k_s1_w_001',
            title: 'ABCmouse - Letter Tracing Activities',
            source: 'ABCmouse',
            url: 'https://www.abcmouse.com/abc/tracingletters',
            type: 'interactive',
            standard: 'Productive: Practice tracing and copying letters of the alphabet',
            outcome: 'Can trace letters of the alphabet and simple familiar words with teacher guidance',
            duration: 'variable'
          },
          {
            id: 'ext_k_s1_w_002',
            title: 'Jack Hartmann - Writing Letters Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Engage in interactive labeling activities',
            outcome: 'Can engage in interactive labeling activities by matching words to labeled classroom objects',
            duration: '2:30'
          }
        ],
        mediation: [
          {
            id: 'ext_k_s1_m_001',
            title: 'British Council - Picture Books for Young Learners',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/short-stories',
            type: 'read_aloud',
            standard: 'Text: Identify objects on the pages of picture books, using simple words',
            outcome: 'Can identify objects in picture books by pointing and using single words',
            duration: '5:00'
          },
          {
            id: 'ext_k_s1_m_002',
            title: 'Super Simple Songs - Show and Tell',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Identify objects on the pages of picture books, using simple words',
            outcome: 'Can name some objects on the pages of picture books during choral reading activities',
            duration: '2:00'
          }
        ]
      },

      // SCENARIO 2: Our Routines
      // Themes: First, I Sit Down. | Pick It Up!
      scenario_2_our_routines: {
        listening: [
          {
            id: 'ext_k_s2_l_001',
            title: 'Jack Hartmann - Morning Routine',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Show comprehension of basic commands used in the classroom',
            outcome: 'Can show comprehension of keywords when hearing familiar basic commands (e.g., acting out "sit" and "pick it up")',
            duration: '3:00'
          },
          {
            id: 'ext_k_s2_l_002',
            title: 'Super Simple Songs - This Is The Way',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Show comprehension of basic commands used in the classroom',
            outcome: 'Can respond to daily classroom commands like "sit down" and "pick it up"',
            duration: '2:30'
          },
          {
            id: 'ext_k_s2_l_003',
            title: 'The Singing Walrus - Daily Routines',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Respond to simple oral requests',
            outcome: 'Can respond to simple oral requests related to classroom routines when spoken slowly',
            duration: '3:15'
          },
          {
            id: 'ext_k_s2_l_004',
            title: 'Starfall - Motion Songs',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/songs/',
            type: 'interactive',
            standard: 'Interactive: Respond to simple oral requests',
            outcome: 'Can respond to simple oral requests related to classroom routines when spoken slowly',
            duration: 'variable'
          },
          {
            id: 'ext_k_s2_l_005',
            title: 'Cocomelon - Morning Routine Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Show comprehension of basic commands used in the classroom',
            outcome: 'Can show comprehension of keywords when hearing familiar basic commands',
            duration: '3:00'
          },
          {
            id: 'ext_k_s2_l_006',
            title: 'British Council - The Clean Up Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/the-clean-up-song',
            type: 'song',
            standard: 'Receptive: Show comprehension of basic commands used in the classroom',
            outcome: 'Can respond to daily classroom commands like "sit down" and "pick it up"',
            duration: '2:00'
          }
        ],
        speaking: [
          {
            id: 'ext_k_s2_sp_001',
            title: 'Jack Hartmann - Follow My Directions',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'action_song',
            standard: 'Productive: Name daily activities, using isolated words',
            outcome: 'Can name daily activities using isolated words (e.g., "sit," "stand")',
            duration: '3:00'
          },
          {
            id: 'ext_k_s2_sp_002',
            title: 'Super Simple Songs - Put On Your Shoes',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'action_song',
            standard: 'Interactive: Engage with simple commands using basic words and gestures',
            outcome: 'Can follow and give very simple commands for interactions (e.g., "Stand up!")',
            duration: '3:30'
          },
          {
            id: 'ext_k_s2_sp_003',
            title: 'Pinkfong - Wash Your Hands',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'action_song',
            standard: 'Interactive: Engage with simple commands using basic words and gestures',
            outcome: 'Can identify very simple classroom commands (e.g., "Stand up," "sit down")',
            duration: '2:45'
          },
          {
            id: 'ext_k_s2_sp_004',
            title: 'Starfall - Learn to Read - Actions',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Productive: Name daily activities, using isolated words',
            outcome: 'Can name daily activities using isolated words (e.g., "sit," "stand")',
            duration: 'variable'
          },
          {
            id: 'ext_k_s2_sp_005',
            title: 'Tongue Twisters - How Much Wood',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/how-much-wood',
            type: 'tongue_twister',
            standard: 'Productive: Name daily activities, using isolated words',
            outcome: 'Can name daily activities using isolated words (e.g., "sit," "stand")',
            duration: '1:00'
          },
          {
            id: 'ext_k_s2_sp_006',
            title: 'The Singing Walrus - Action Verbs Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'chant',
            standard: 'Interactive: Engage with simple commands using basic words and gestures',
            outcome: 'Can identify very simple classroom commands (e.g., "Stand up," "sit down")',
            duration: '2:30'
          }
        ],
        reading: [
          {
            id: 'ext_k_s2_r_001',
            title: 'British Council - Daily Routines Word Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/word-games/daily-routine',
            type: 'interactive',
            standard: 'Reading: Match spoken words to their written form as they are heard and supported with pictures',
            outcome: 'Can match spoken words to their written form with picture support during shared reading',
            duration: 'variable'
          },
          {
            id: 'ext_k_s2_r_002',
            title: 'Starfall - Alphabet Recognition',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Recognize familiar letters',
            outcome: 'Can identify the names of letters (e.g., A, B, C) at the beginning of familiar words by pointing or gesturing',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_k_s2_w_001',
            title: 'ABCmouse - Write Simple Words',
            source: 'ABCmouse',
            url: 'https://www.abcmouse.com/abc/writing',
            type: 'interactive',
            standard: 'Productive: Write simple words with model guidance',
            outcome: 'Can write simple words with teacher support (e.g., "pen," "door")',
            duration: 'variable'
          },
          {
            id: 'ext_k_s2_w_002',
            title: 'Twinkl - Daily Routine Label Worksheet',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/daily-routine-labelling',
            type: 'worksheet',
            standard: 'Interactive: Engage in interactive labeling activities',
            outcome: 'Can engage in interactive activities to label objects related to classroom routines',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_k_s2_m_001',
            title: 'Jack Hartmann - Classroom Cleanup Routine',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Concept: Use gestures and drawings to link daily routines to classroom activities',
            outcome: 'Can use gestures to act out daily classroom routines',
            duration: '2:45'
          },
          {
            id: 'ext_k_s2_m_002',
            title: 'Super Simple Songs - Draw My Day',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'drawing_activity',
            standard: 'Concept: Use gestures and drawings to link daily routines to classroom activities',
            outcome: 'Can use drawings to illustrate daily classroom routines',
            duration: '3:00'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 1 | Foundational Learner – Pre A1.3
    // =========================================================
    grade_1: {

      // SCENARIO 1: All Week Long!
      // Themes: Today Is Tuesday! | It's the Weekend.
      scenario_1_all_week_long: {
        listening: [
          {
            id: 'ext_g1_s1_l_001',
            title: 'Super Simple Songs - Days of the Week',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Recognize familiar words and basic phrases',
            outcome: 'Can recognize familiar words related to days of the week spoken slowly (e.g., "Monday," "Today is Monday.")',
            duration: '2:20'
          },
          {
            id: 'ext_g1_s1_l_002',
            title: 'Jack Hartmann - Days of the Week Rap',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'rap',
            standard: 'Receptive: Recognize familiar words and basic phrases',
            outcome: 'Can recognize familiar words related to days of the week spoken slowly',
            duration: '2:45'
          },
          {
            id: 'ext_g1_s1_l_003',
            title: 'The Singing Walrus - Days of the Week',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Respond to simple conversations on familiar topics by using gestures or by pointing',
            outcome: 'Can respond to the basic days of the week and weekend by pointing at the word or position on a basic calendar',
            duration: '2:45'
          },
          {
            id: 'ext_g1_s1_l_004',
            title: 'Starfall - Calendar - Days',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/calendar/',
            type: 'interactive',
            standard: 'Interactive: Respond to simple conversations on familiar topics by using gestures or by pointing',
            outcome: 'Can recognize and respond to questions about the days of the week using basic phrases',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s1_l_005',
            title: 'Cocomelon - Days of the Week',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Recognize familiar words and basic phrases',
            outcome: 'Can recognize familiar words related to days of the week spoken slowly',
            duration: '2:30'
          },
          {
            id: 'ext_g1_s1_l_006',
            title: 'British Council - The Days of the Week Chant',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/the-days-of-the-week-chant',
            type: 'chant',
            standard: 'Receptive: Recognize familiar words and basic phrases',
            outcome: 'Can recognize familiar words related to days of the week spoken slowly',
            duration: '1:30'
          }
        ],
        speaking: [
          {
            id: 'ext_g1_s1_sp_001',
            title: 'Jack Hartmann - What Day Is It?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Productive: Use basic words or phrases to identify time words',
            outcome: 'Can identify specific time-related words, such as days of the week and the weekend, in simple sentences',
            duration: '2:45'
          },
          {
            id: 'ext_g1_s1_sp_002',
            title: 'Super Simple Songs - Yesterday, Today, Tomorrow',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Exchange simple questions and answers about the current day',
            outcome: 'Can exchange simple questions and answers about the current day, using basic time-related words',
            duration: '2:30'
          },
          {
            id: 'ext_g1_s1_sp_003',
            title: "Starfall - It's Fun to Read - Calendar",
            source: 'Starfall',
            url: 'https://www.starfall.com/h/its-fun-to-read/',
            type: 'interactive',
            standard: 'Interactive: Exchange simple questions and answers about the current day',
            outcome: 'Can respond to questions about time using basic words and phrases to indicate days',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s1_sp_004',
            title: 'Pinkfong - Days of the Week Dance',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'action_song',
            standard: 'Productive: Use basic words or phrases to identify time words',
            outcome: 'Can identify specific time-related words, such as days of the week and the weekend, in simple sentences',
            duration: '2:45'
          },
          {
            id: 'ext_g1_s1_sp_005',
            title: 'Tongue Twisters - Thirty-three Thieves',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/thirty-three-thieves',
            type: 'tongue_twister',
            standard: 'Productive: Use basic words or phrases to identify time words',
            outcome: 'Can identify specific time-related words, such as days of the week and the weekend, in simple sentences',
            duration: '1:00'
          },
          {
            id: 'ext_g1_s1_sp_006',
            title: 'The Singing Walrus - Today is Monday',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Exchange simple questions and answers about the current day',
            outcome: 'Can exchange simple questions and answers about the current day, using basic time-related words',
            duration: '3:00'
          }
        ],
        reading: [
          {
            id: 'ext_g1_s1_r_001',
            title: 'Starfall - Calendar and Days Phonics',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify sounds of the letters of the alphabet when supported with a concrete item or picture',
            outcome: 'Can identify the sounds of the letters of the alphabet in familiar vocabulary related to days of the week',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s1_r_002',
            title: 'British Council - Days of the Week Word Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/word-games/days-of-the-week',
            type: 'interactive',
            standard: 'Reading: Find familiar words in a text',
            outcome: 'Can find and point to familiar words in simple texts (e.g., "Monday," "Tuesday")',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s1_r_003',
            title: "Epic! - Today is Monday (Eric Carle)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/today-is-monday',
            type: 'ebook',
            standard: 'Reading: Identify one-step written directions with visual support',
            outcome: 'Can identify and follow one-step written directions with visual support',
            duration: '5:00'
          }
        ],
        writing: [
          {
            id: 'ext_g1_s1_w_001',
            title: 'Twinkl - Days of the Week Writing Practice',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/days-of-the-week-writing',
            type: 'worksheet',
            standard: 'Productive: Write their own name and other very familiar words without assistance',
            outcome: 'Can write their name and days of the week without assistance',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s1_w_002',
            title: 'Jack Hartmann - Write the Days Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Draw pictures related to a simple sentence they have written',
            outcome: 'Can draw pictures for sentences they have written (e.g., a greeting card for "Happy Monday!")',
            duration: '2:30'
          }
        ],
        mediation: [
          {
            id: 'ext_g1_s1_m_001',
            title: 'Super Simple Songs - Calendar Routine',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Use pictures or objects to express ideas',
            outcome: 'Can use simple drawings or pictures to communicate days of the week to peers',
            duration: '2:00'
          },
          {
            id: 'ext_g1_s1_m_002',
            title: 'British Council - Weekly Calendar Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts/weekly-calendar',
            type: 'craft',
            standard: 'Concept: Use facial expressions and simple gestures to help explain feelings or needs',
            outcome: 'Can use gestures and facial expressions to express basic ideas about days of the week to others',
            duration: 'variable'
          }
        ]
      },

      // SCENARIO 2: Nice Weather Today!
      // Themes: It's Sunny! | It's Raining.
      scenario_2_nice_weather_today: {
        listening: [
          {
            id: 'ext_g1_s2_l_001',
            title: 'Super Simple Songs - Rain Rain Go Away',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=xnmQ_BpJRSk',
            type: 'song',
            standard: 'Receptive: Follow very simple directions and instructions',
            outcome: 'Can follow basic instructions related to weather (e.g., "Look outside, it\'s sunny.")',
            duration: '2:00'
          },
          {
            id: 'ext_g1_s2_l_002',
            title: 'Jack Hartmann - What\'s the Weather?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Respond to simple conversations on familiar topics by using gestures or by pointing',
            outcome: 'Can respond to questions about the weather (e.g., "What is the weather today?")',
            duration: '2:45'
          },
          {
            id: 'ext_g1_s2_l_003',
            title: 'The Singing Walrus - Weather Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Respond to simple conversations on familiar topics by using gestures or by pointing',
            outcome: 'Can recognize weather-related words like "sunny" or "raining" in conversations',
            duration: '2:30'
          },
          {
            id: 'ext_g1_s2_l_004',
            title: 'British Council - The Weather Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/the-weather-song',
            type: 'song',
            standard: 'Receptive: Follow very simple directions and instructions',
            outcome: 'Can follow basic instructions related to weather',
            duration: '2:00'
          },
          {
            id: 'ext_g1_s2_l_005',
            title: 'Cocomelon - Sunny Day Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Follow very simple directions and instructions',
            outcome: 'Can recognize weather-related words like "sunny" or "raining" in conversations',
            duration: '2:30'
          },
          {
            id: 'ext_g1_s2_l_006',
            title: 'Starfall - Weather Interactive',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/weather/',
            type: 'interactive',
            standard: 'Interactive: Respond to simple conversations on familiar topics by using gestures or by pointing',
            outcome: 'Can respond to questions about the weather (e.g., "What is the weather today?")',
            duration: 'variable'
          }
        ],
        speaking: [
          {
            id: 'ext_g1_s2_sp_001',
            title: 'Jack Hartmann - Count to 20 Weather',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Productive: Use basic words or phrases to identify time words',
            outcome: 'Can count weather features up to 20, with help (e.g., "Let\'s count the clouds!")',
            duration: '3:00'
          },
          {
            id: 'ext_g1_s2_sp_002',
            title: 'British Council - Weather Words Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/word-games/weather',
            type: 'interactive',
            standard: 'Interactive: Exchange simple questions and answers about the current day',
            outcome: 'Can answer simple questions about the weather, using one- or two-word responses',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s2_sp_003',
            title: 'Super Simple Songs - How Is the Weather?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Exchange simple questions and answers about the current day',
            outcome: 'Can express simple feelings or reactions to weather using words and gestures',
            duration: '2:20'
          },
          {
            id: 'ext_g1_s2_sp_004',
            title: 'Tongue Twisters - Whether the Weather',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/whether-the-weather',
            type: 'tongue_twister',
            standard: 'Productive: Use basic words or phrases to identify time words',
            outcome: 'Can answer simple questions about the weather, using one- or two-word responses',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g1_s2_r_001',
            title: 'British Council - Weather Picture Dictionary',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/word-games/weather',
            type: 'interactive',
            standard: 'Reading: Match simple words to corresponding pictures',
            outcome: 'Can match simple weather-related words to corresponding pictures',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s2_r_002',
            title: "Epic! - The Snowy Day (Ezra Jack Keats)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/the-snowy-day',
            type: 'ebook',
            standard: 'Reading: Identify one-step written directions with visual support',
            outcome: 'Can identify weather-related words in simple text instructions',
            duration: '5:00'
          },
          {
            id: 'ext_g1_s2_r_003',
            title: 'Starfall - Letter Sounds in Weather Words',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify sounds of the letters of the alphabet when supported with a concrete item or picture',
            outcome: 'Can identify sounds of the letters of the alphabet in familiar words related to weather',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g1_s2_w_001',
            title: 'Twinkl - Weather Diary Writing Template',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/weather-diary',
            type: 'worksheet',
            standard: 'Interactive: Write simple phrases with errors on a drawing or postcard',
            outcome: 'Can write simple phrases related to the weather (e.g., "It is sunny!") with support',
            duration: 'variable'
          },
          {
            id: 'ext_g1_s2_w_002',
            title: 'Jack Hartmann - Draw the Weather',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'drawing_activity',
            standard: 'Productive: Fill in a form with their name and age with adult help',
            outcome: 'Can write their name and simple phrases on a weather-related drawing',
            duration: '2:30'
          }
        ],
        mediation: [
          {
            id: 'ext_g1_s2_m_001',
            title: 'Super Simple Songs - Cloud Watching',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Draw a single picture that represents a simple story or event',
            outcome: 'Can draw simple pictures representing the weather and label them with help',
            duration: '2:00'
          },
          {
            id: 'ext_g1_s2_m_002',
            title: 'British Council - Weather Craft Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts/weather-vane',
            type: 'craft',
            standard: 'Communication: Use gestures to show how to play a very simple game',
            outcome: 'Can use gestures or body language to describe weather (e.g., pretending to shiver when it\'s cold)',
            duration: 'variable'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 2 | Foundational Learner – Pre A1.4
    // =========================================================
    grade_2: {

      // SCENARIO 1: School Days
      // Themes: Yesterday Was Wednesday. | Today Is Friday!
      scenario_1_school_days: {
        listening: [
          {
            id: 'ext_g2_s1_l_001',
            title: 'Jack Hartmann - Yesterday, Today, Tomorrow',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Follow the main plot of simple stories told with visual support',
            outcome: 'Can follow with visual support the main plot of simple stories about the days of the week',
            duration: '3:00'
          },
          {
            id: 'ext_g2_s1_l_002',
            title: 'Super Simple Songs - School Day Routine',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Respond in a predictable pattern to simple questions about familiar things',
            outcome: 'Can listen and respond in a predictable pattern to simple questions about days of the week',
            duration: '2:30'
          },
          {
            id: 'ext_g2_s1_l_003',
            title: 'British Council - What Day Is It? Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/what-day-is-it',
            type: 'song',
            standard: 'Receptive: Follow the main plot of simple stories told with visual support',
            outcome: 'Can follow the main plot of simple stories by identifying familiar routines associated with specific days',
            duration: '1:50'
          },
          {
            id: 'ext_g2_s1_l_004',
            title: 'Starfall - Weekly Planner Activity',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/calendar/',
            type: 'interactive',
            standard: 'Interactive: Respond in a predictable pattern to simple questions about familiar things',
            outcome: 'Can listen and respond in a predictable pattern to simple questions about days of the week',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s1_l_005',
            title: 'The Singing Walrus - School Week Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Receptive: Follow the main plot of simple stories told with visual support',
            outcome: 'Can follow with visual support the main plot of simple stories about the days of the week',
            duration: '2:45'
          }
        ],
        speaking: [
          {
            id: 'ext_g2_s1_sp_001',
            title: 'Jack Hartmann - What Do You Do At School?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Productive: Identify independently common actions seen in daily routines',
            outcome: 'Can identify common actions using simple phrases (e.g., "I write," "I read," and "I listen.")',
            duration: '2:45'
          },
          {
            id: 'ext_g2_s1_sp_002',
            title: 'British Council - Daily Routines Speaking Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/daily-routine',
            type: 'interactive',
            standard: 'Interactive: Participate in simple formulaic question-and-answer exchanges on familiar subjects',
            outcome: 'Can participate in simple question-and-answer exchanges about days of the week',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s1_sp_003',
            title: 'Super Simple Songs - I Go To School',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Productive: Identify independently common actions seen in daily routines',
            outcome: 'Can describe common actions in daily routines in simple exchanges',
            duration: '2:20'
          },
          {
            id: 'ext_g2_s1_sp_004',
            title: 'Tongue Twisters - Peter Piper',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/peter-piper',
            type: 'tongue_twister',
            standard: 'Productive: Identify independently common actions seen in daily routines',
            outcome: 'Can identify common actions using simple phrases',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g2_s1_r_001',
            title: 'Starfall - Read and Match - Days',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Recognize all the letters of the alphabet in isolation and the correspondence between letter and sound',
            outcome: 'Can recognize all the letters of the alphabet and connect each letter to its initial sound in familiar words',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s1_r_002',
            title: 'British Council - Simple Sentences Reading Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/simple-sentences',
            type: 'interactive',
            standard: 'Reading: Show comprehension of simple sentences',
            outcome: 'Can show comprehension of the days of the week in simple texts by matching sentences with visual aids',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s1_r_003',
            title: "Epic! - The Very Hungry Caterpillar (Days reading)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/the-very-hungry-caterpillar',
            type: 'ebook',
            standard: 'Reading: Follow written instructions with visual aids',
            outcome: 'Can identify and respond to key words about days in simple texts using visual support',
            duration: '5:00'
          }
        ],
        writing: [
          {
            id: 'ext_g2_s1_w_001',
            title: 'Twinkl - Thank You Card Template - Days Theme',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/thank-you-card-template',
            type: 'worksheet',
            standard: 'Productive: Write simple thank-you notes or greetings in cards using one-sentence picture cards',
            outcome: 'Can write simple thank-you notes or greetings using one-sentence picture cards',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s1_w_002',
            title: 'British Council - Class Book Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts',
            type: 'craft',
            standard: 'Interactive: Contribute a word to a class story or sentence, with help',
            outcome: 'Can create one-word captions of items for a class book',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g2_s1_m_001',
            title: 'Jack Hartmann - Story Sequencing Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Text: Summarize short stories using drawings or pictures',
            outcome: 'Can summarize short stories using drawings or pictures',
            duration: '2:30'
          },
          {
            id: 'ext_g2_s1_m_002',
            title: 'British Council - Explain to a Friend Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games',
            type: 'interactive',
            standard: 'Communication: Explain simple written instructions to peers, using English or Spanish',
            outcome: 'Can explain simple written instructions to peers, using gestures',
            duration: 'variable'
          }
        ]
      },

      // SCENARIO 2: School Life Adventures
      // Themes: That's a Big Book! | That's a Small, Brown Bag.
      scenario_2_school_life_adventures: {
        listening: [
          {
            id: 'ext_g2_s2_l_001',
            title: 'Super Simple Songs - Big and Small',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Follow the main plot of simple stories told with visual support',
            outcome: 'Can follow the main idea of a simple story and identify familiar vocabulary when visuals are provided',
            duration: '2:20'
          },
          {
            id: 'ext_g2_s2_l_002',
            title: 'Jack Hartmann - Classroom Commands',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Demonstrate comprehension of a variety of classroom commands',
            outcome: 'Can understand and respond appropriately to basic classroom commands (e.g., "Please sit down." or "Open your book.")',
            duration: '2:45'
          },
          {
            id: 'ext_g2_s2_l_003',
            title: 'British Council - Adjectives Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/adjectives',
            type: 'song',
            standard: 'Receptive: Follow the main plot of simple stories told with visual support',
            outcome: 'Can participate in brief exchanges using simple, familiar classroom phrases',
            duration: '2:00'
          },
          {
            id: 'ext_g2_s2_l_004',
            title: 'The Singing Walrus - Opposites Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Demonstrate comprehension of a variety of classroom commands',
            outcome: 'Can follow the main idea of a simple story and identify familiar vocabulary when visuals are provided',
            duration: '3:00'
          }
        ],
        speaking: [
          {
            id: 'ext_g2_s2_sp_001',
            title: 'British Council - Describe the Object Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games/describe-the-object',
            type: 'interactive',
            standard: 'Productive: Contribute to storytelling sessions with simple sentences based on visual prompts',
            outcome: 'Can contribute simple sentences to storytelling sessions using visual prompts (e.g., "The book is big.")',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s2_sp_002',
            title: 'Super Simple Songs - Greetings and Farewells',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=tVlcKp3bO88',
            type: 'song',
            standard: 'Interactive: Use greetings and farewells appropriately in conversations with peers',
            outcome: 'Can use appropriate greetings and farewells in brief peer interactions (e.g., "How are you?" "Bye.")',
            duration: '1:50'
          },
          {
            id: 'ext_g2_s2_sp_003',
            title: 'Tongue Twisters - Betty Botter',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/betty-botter',
            type: 'tongue_twister',
            standard: 'Productive: Contribute to storytelling sessions with simple sentences based on visual prompts',
            outcome: 'Can ask and answer in a predictable pattern to questions about familiar objects',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g2_s2_r_001',
            title: 'Starfall - Beginning and Ending Sounds',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Identify a spoken word\'s initial and final phoneme',
            outcome: 'Can identify the initial and final phonemes of common classroom objects',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s2_r_002',
            title: "Epic! - A Color of His Own (Leo Lionni)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/a-color-of-his-own',
            type: 'ebook',
            standard: 'Reading: Identify key words and phrases in texts',
            outcome: 'Can identify keywords and phrases in simple texts related to classroom objects',
            duration: '5:00'
          },
          {
            id: 'ext_g2_s2_r_003',
            title: 'British Council - Classroom Objects Reading',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/classroom',
            type: 'interactive',
            standard: 'Reading: Follow written instructions with visual aids',
            outcome: 'Can follow written instructions to identify classroom objects (e.g., "Circle the picture of the pencil.")',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g2_s2_w_001',
            title: 'Twinkl - Thank You Note with Adjectives',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/thank-you-note-template',
            type: 'worksheet',
            standard: 'Productive: Write simple thank-you notes or greetings in cards using one-sentence picture cards',
            outcome: 'Can write simple, polite thank-you notes or greetings using familiar classroom vocabulary and adjectives',
            duration: 'variable'
          },
          {
            id: 'ext_g2_s2_w_002',
            title: 'British Council - Class Story Contribution',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts/story-book',
            type: 'craft',
            standard: 'Interactive: Contribute a word to a class story or sentence, with help',
            outcome: 'Can contribute words to a simple story describing classroom objects',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g2_s2_m_001',
            title: 'Super Simple Songs - Point and Name',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Use visual information in texts to convey meaning',
            outcome: 'Can use visual information in texts to convey meaning by pointing to images that match the story',
            duration: '2:00'
          },
          {
            id: 'ext_g2_s2_m_002',
            title: 'British Council - Relay Message Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games',
            type: 'interactive',
            standard: 'Communication: Relay simple information received verbally using English or Spanish',
            outcome: 'Can relay simple information received verbally by repeating short words or using gestures',
            duration: 'variable'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 3 | Beginner – A1.1
    // =========================================================
    grade_3: {

      // SCENARIO 1: Places I Can Go
      // Themes: I'm at School. | I'm at the Market.
      scenario_1_places_i_can_go: {
        listening: [
          {
            id: 'ext_g3_s1_l_001',
            title: 'Jack Hartmann - Places in My Town',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Demonstrate comprehension of simple spoken instructions',
            outcome: 'Can demonstrate comprehension and perform tasks based on oral instructions related to identifying locations',
            duration: '3:00'
          },
          {
            id: 'ext_g3_s1_l_002',
            title: 'British Council - Where Are You? Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/where-are-you',
            type: 'song',
            standard: 'Interactive: Identify the main points in a conversation',
            outcome: 'Can identify the main points of a conversation about specific places or locations',
            duration: '2:00'
          },
          {
            id: 'ext_g3_s1_l_003',
            title: 'Super Simple Songs - Community Places',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Identify the main points in a conversation',
            outcome: 'Can recognize words and phrases about places from one peer to another',
            duration: '2:30'
          },
          {
            id: 'ext_g3_s1_l_004',
            title: 'Starfall - Places Interactive Map',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/reading-for-comprehension/',
            type: 'interactive',
            standard: 'Receptive: Demonstrate comprehension of simple spoken instructions',
            outcome: 'Can demonstrate comprehension and perform tasks based on oral instructions related to identifying locations',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s1_l_005',
            title: 'The Singing Walrus - At the Market',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Identify the main points in a conversation',
            outcome: 'Can recognize words and phrases about places from one peer to another',
            duration: '2:45'
          }
        ],
        speaking: [
          {
            id: 'ext_g3_s1_sp_001',
            title: 'British Council - Where Do You Live? Dialogue',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/where-do-you-live',
            type: 'interactive',
            standard: 'Productive: Describe routines and simple procedures',
            outcome: 'Can describe routines using location phrases (e.g., "I go to school in the morning.")',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s1_sp_002',
            title: 'Jack Hartmann - Where Are You Going?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Participate in simple dialogues on familiar topics',
            outcome: 'Can participate in dialogue and answer questions about locations using simple terms',
            duration: '2:45'
          },
          {
            id: 'ext_g3_s1_sp_003',
            title: 'Tongue Twisters - Fuzzy Wuzzy',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/fuzzy-wuzzy',
            type: 'tongue_twister',
            standard: 'Productive: Describe routines and simple procedures',
            outcome: 'Can describe personal experiences by asking questions about familiar places',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g3_s1_r_001',
            title: 'British Council - My Town Reading Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/my-town',
            type: 'interactive',
            standard: 'Reading: Outline the meaning of simple paragraphs',
            outcome: 'Can identify the main idea in simple paragraphs about locations (e.g., "I\'m at school.")',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s1_r_002',
            title: "Epic! - Mapping Penny's World",
            source: 'Epic',
            url: 'https://www.getepic.com/book/mapping-pennys-world',
            type: 'ebook',
            standard: 'Reading: Follow written instructions for making or doing something',
            outcome: 'Can follow written instructions to identify or describe landmarks in a town',
            duration: '5:00'
          },
          {
            id: 'ext_g3_s1_r_003',
            title: 'Starfall - Phoneme Blending - Location Words',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Blend spoken phonemes to form one-syllable or two-syllable words',
            outcome: 'Can blend spoken phonemes to form one-syllable and two-syllable familiar words',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g3_s1_w_001',
            title: 'Twinkl - My Community Writing Frame',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/my-community-writing-frame',
            type: 'worksheet',
            standard: 'Productive: Write simple phrases and sentences on familiar topics',
            outcome: 'Can write simple phrases and sentences about places like home and school',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s1_w_002',
            title: 'British Council - Map Labeling Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts/my-town-map',
            type: 'craft',
            standard: 'Interactive: Write short role plays to be acted out based on class content',
            outcome: 'Can write simple captions for classroom images and content',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g3_s1_m_001',
            title: 'British Council - Follow the Directions Game',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games/follow-the-directions',
            type: 'interactive',
            standard: 'Communication: Assist peers in following oral directions',
            outcome: 'Can assist peers in following directions by pointing or using gestures',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s1_m_002',
            title: 'Super Simple Songs - Here We Go to the Market',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Interpret short, simple messages from class texts',
            outcome: 'Can interpret short, simple messages about locations using gestures',
            duration: '2:20'
          }
        ]
      },

      // SCENARIO 2: A Polite Request
      // Themes: Can I Have a Pencil? | Sorry, I Can't Help You.
      scenario_2_a_polite_request: {
        listening: [
          {
            id: 'ext_g3_s2_l_001',
            title: 'British Council - Polite Requests Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/please-and-thank-you',
            type: 'song',
            standard: 'Receptive: Respond to basic questions about a familiar story',
            outcome: 'Can respond to basic questions about a class story using appropriate phrases and expressions',
            duration: '2:00'
          },
          {
            id: 'ext_g3_s2_l_002',
            title: 'Super Simple Songs - Can I Have Some?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Summarize spoken stories',
            outcome: 'Can summarize a spoken dialogue about asking for help or making a polite request in two sentences',
            duration: '2:30'
          },
          {
            id: 'ext_g3_s2_l_003',
            title: 'Cocomelon - Please and Thank You',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=tvNEqRkL6Jo',
            type: 'song',
            standard: 'Receptive: Respond to basic questions about a familiar story',
            outcome: 'Can recognize familiar phrases from a dialogue by raising hands when they hear key phrases',
            duration: '3:15'
          },
          {
            id: 'ext_g3_s2_l_004',
            title: 'Jack Hartmann - I Can Ask Politely',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Summarize spoken stories',
            outcome: 'Can summarize a spoken dialogue about asking for help or making a polite request in two sentences',
            duration: '2:45'
          }
        ],
        speaking: [
          {
            id: 'ext_g3_s2_sp_001',
            title: 'British Council - Classroom Games - Polite Requests',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games/polite-requests',
            type: 'interactive',
            standard: 'Productive: Explain simple rules of a game or activity',
            outcome: 'Can politely explain the rules of a simple game (e.g., "Please roll the dice and move your piece.")',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s2_sp_002',
            title: 'Super Simple Songs - Excuse Me Please',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Collaborate verbally in team activities',
            outcome: 'Can collaborate with peers in a group activity, sharing ideas and listening to others',
            duration: '2:20'
          },
          {
            id: 'ext_g3_s2_sp_003',
            title: 'Tongue Twisters - Unique New York',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/unique-new-york',
            type: 'tongue_twister',
            standard: 'Productive: Explain simple rules of a game or activity',
            outcome: 'Can describe the inability to do something in a game or activity in a polite manner',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g3_s2_r_001',
            title: "Epic! - Excuse Me! A Little Book of Manners",
            source: 'Epic',
            url: 'https://www.getepic.com/book/excuse-me-a-little-book-of-manners',
            type: 'ebook',
            standard: 'Reading: Show comprehension of texts by answering both written and oral questions',
            outcome: 'Can show understanding of polite request texts by writing simple responses',
            duration: '5:00'
          },
          {
            id: 'ext_g3_s2_r_002',
            title: 'British Council - Manners Reading Comprehension',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/manners',
            type: 'interactive',
            standard: 'Reading: Identify key details in a story',
            outcome: 'Can identify details in a story to answer questions',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s2_r_003',
            title: 'Starfall - Phoneme Blending - Request Words',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/learn-to-read/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Blend spoken phonemes to form one-syllable or two-syllable words',
            outcome: 'Can identify and blend individual phonemes to create one-syllable or two-syllable familiar words',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g3_s2_w_001',
            title: 'Twinkl - Polite Request Writing Template',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/polite-request-writing',
            type: 'worksheet',
            standard: 'Productive: Write instructions for simple tasks',
            outcome: 'Can write simple, clear instructions for a game in a polite manner',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s2_w_002',
            title: 'British Council - Collaborative Dialogue Writing',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts',
            type: 'craft',
            standard: 'Interactive: Write a simple collaborative text with peers',
            outcome: 'Can co-write short dialogues with peers using polite requests',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g3_s2_m_001',
            title: 'British Council - Mime the Polite Request',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games',
            type: 'interactive',
            standard: 'Communication: Relay simplified explanations of lessons to absent peers',
            outcome: 'Can relay simple, polite request phrases to absent peers by acting them out',
            duration: 'variable'
          },
          {
            id: 'ext_g3_s2_m_002',
            title: 'Super Simple Songs - I Can Help',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Simplify written instructions for peers',
            outcome: 'Can simplify written instructions for peers using basic words and gestures',
            duration: '2:00'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 4 | Beginner – A1.2
    // =========================================================
    grade_4: {

      // SCENARIO 1: A Walk in the Neighborhood
      // Themes: This Is My Favorite. | It's the Best!
      scenario_1_a_walk_in_the_neighborhood: {
        listening: [
          {
            id: 'ext_g4_s1_l_001',
            title: 'Jack Hartmann - My Neighborhood Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Identify the main points of talks on familiar matters',
            outcome: 'Can listen and identify main points in talks about favorite places in the neighborhood',
            duration: '3:00'
          },
          {
            id: 'ext_g4_s1_l_002',
            title: 'British Council - My Favorite Place',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/my-favourite-place',
            type: 'interactive',
            standard: 'Interactive: Respond to questions about familiar topics',
            outcome: 'Can respond to questions about familiar places (e.g., "What is your favorite place?")',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s1_l_003',
            title: 'Super Simple Songs - I Love My Neighborhood',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Identify the main points of talks on familiar matters',
            outcome: 'Can listen to and recognize the main points people share about places they like',
            duration: '2:30'
          },
          {
            id: 'ext_g4_s1_l_004',
            title: 'Starfall - Community Places Reading',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/reading-for-comprehension/',
            type: 'interactive',
            standard: 'Interactive: Respond to questions about familiar topics',
            outcome: 'Can respond to questions about familiar places',
            duration: 'variable'
          }
        ],
        speaking: [
          {
            id: 'ext_g4_s1_sp_001',
            title: 'British Council - Describe Your Neighborhood',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/my-neighbourhood',
            type: 'interactive',
            standard: 'Productive: Describe a current personal experience in detail in a logical sequence',
            outcome: 'Can describe a current personal experience related to familiar places in sequence when sharing with peers',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s1_sp_002',
            title: 'Jack Hartmann - My Favorite Things Chant',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Interactive: Engage in simple exchanges about personal interests',
            outcome: 'Can engage in simple exchanges about personal interests and listen to peers\' preferences',
            duration: '2:45'
          },
          {
            id: 'ext_g4_s1_sp_003',
            title: 'Tongue Twisters - A Big Black Bug',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/big-black-bug',
            type: 'tongue_twister',
            standard: 'Productive: Describe a current personal experience in detail in a logical sequence',
            outcome: 'Can express opinions about a familiar place (e.g., "The park is the best because it has swings.")',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g4_s1_r_001',
            title: "Epic! - My Neighborhood (Nonfiction Reader)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/my-neighborhood',
            type: 'ebook',
            standard: 'Reading: Outline key information in simple factual texts on familiar subjects',
            outcome: 'Can read and outline key information about places in the neighborhood in short texts',
            duration: '5:00'
          },
          {
            id: 'ext_g4_s1_r_002',
            title: 'British Council - Places Reading Comprehension',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/places',
            type: 'interactive',
            standard: 'Reading: Comprehend instructions for classroom projects and crafts',
            outcome: 'Can comprehend instructions and highlight phrases describing familiar places for a classroom project',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s1_r_003',
            title: 'Starfall - Onset and Rime Activities',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Decode English graphemes and phonemes using knowledge of word parts, syllabification',
            outcome: 'Can blend spoken onsets and rimes to form one-syllable and two-syllable words',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g4_s1_w_001',
            title: 'Twinkl - My Favorite Place Writing Frame',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/my-favourite-place-writing',
            type: 'worksheet',
            standard: 'Productive: Write simple sentences on familiar topics',
            outcome: 'Can write simple sentences about favorite places (e.g., "The park is fun.")',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s1_w_002',
            title: 'British Council - Peer Editing Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts',
            type: 'craft',
            standard: 'Interactive: Edit classmates\' written work',
            outcome: 'Can edit classmates\' sentences about familiar places for clarity',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g4_s1_m_001',
            title: 'British Council - School Notice Reading',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/school-notices',
            type: 'interactive',
            standard: 'Text: Interpret simple school notices',
            outcome: 'Can interpret simple school notices using gestures to indicate main ideas',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s1_m_002',
            title: 'Jack Hartmann - Let\'s Discuss Our Neighborhood',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Communication: Facilitate a simple discussion among classmates',
            outcome: 'Can help facilitate a discussion on favorite places in the neighborhood by asking simple questions',
            duration: '3:00'
          }
        ]
      },

      // SCENARIO 2: Helping in the Garden
      // Themes: The Tomatoes Grow Quickly. | These Plants Are from Panama.
      scenario_2_helping_in_the_garden: {
        listening: [
          {
            id: 'ext_g4_s2_l_001',
            title: 'British Council - In the Garden Song',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/songs/in-the-garden',
            type: 'song',
            standard: 'Receptive: Follow stories and descriptions about everyday experiences',
            outcome: 'Can follow simple stories and descriptions about planting and watering',
            duration: '2:00'
          },
          {
            id: 'ext_g4_s2_l_002',
            title: 'Jack Hartmann - Plants and Growing',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Participate in discussions about school events',
            outcome: 'Can participate in discussions about school garden tasks, answering simple questions based on oral information',
            duration: '3:00'
          },
          {
            id: 'ext_g4_s2_l_003',
            title: 'Super Simple Songs - Growing Seeds',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Follow stories and descriptions about everyday experiences',
            outcome: 'Can get the gist of a conversation on caring for plants',
            duration: '2:20'
          },
          {
            id: 'ext_g4_s2_l_004',
            title: 'The Singing Walrus - Vegetables Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Receptive: Follow stories and descriptions about everyday experiences',
            outcome: 'Can follow simple stories and descriptions about planting and watering',
            duration: '2:45'
          }
        ],
        speaking: [
          {
            id: 'ext_g4_s2_sp_001',
            title: 'British Council - How Does Your Garden Grow?',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/garden',
            type: 'interactive',
            standard: 'Productive: Explain how to perform a simple task',
            outcome: 'Can describe and perform simple gardening tasks (e.g., "You dig a hole, plant the seed, and water the plant.")',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s2_sp_002',
            title: 'Jack Hartmann - Garden Chant',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Interactive: Engage in questions and answers about familiar subjects',
            outcome: 'Can ask and answer questions about gardening when collaborating on a project',
            duration: '2:45'
          },
          {
            id: 'ext_g4_s2_sp_003',
            title: 'Tongue Twisters - Swan Swam Over the Sea',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/swan-swam',
            type: 'tongue_twister',
            standard: 'Interactive: Engage in questions and answers about familiar subjects',
            outcome: 'Can ask and answer simple questions about their preferences related to gardening',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g4_s2_r_001',
            title: "Epic! - From Seed to Plant (Gail Gibbons)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/from-seed-to-plant',
            type: 'ebook',
            standard: 'Reading: Identify the main ideas and details in short narratives',
            outcome: 'Can identify main ideas about gardening in short texts (e.g., "Tomatoes grow in the sun.")',
            duration: '5:00'
          },
          {
            id: 'ext_g4_s2_r_002',
            title: 'British Council - Plants Reading Comprehension',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/plants',
            type: 'interactive',
            standard: 'Reading: Summarize simple stories or articles',
            outcome: 'Can summarize details on how plants grow in short narratives',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s2_r_003',
            title: 'Starfall - Two-Syllable Garden Words',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/sounds/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Read regularly spelled one-syllable or two-syllable words represented by single letters',
            outcome: 'Can read and spell basic one-syllable and two-syllable words related to gardening (e.g., "garden" or "leaf")',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g4_s2_w_001',
            title: 'Twinkl - My Garden Opinion Writing',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/garden-opinion-writing',
            type: 'worksheet',
            standard: 'Productive: Express opinions about familiar topics in writing',
            outcome: 'Can express opinions in writing about garden tasks in short sentences',
            duration: 'variable'
          },
          {
            id: 'ext_g4_s2_w_002',
            title: 'British Council - Collaborative Garden Story',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/crafts/garden-book',
            type: 'craft',
            standard: 'Interactive: Write simple role plays or dialogues collaboratively',
            outcome: 'Can write simple role plays or dialogues about garden tasks with classmates',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g4_s2_m_001',
            title: 'Super Simple Songs - Mime the Garden Action',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'action_song',
            standard: 'Text: Simplify textbook content for peer study groups',
            outcome: 'Can simplify textbook content on gardening topics by miming actions',
            duration: '2:00'
          },
          {
            id: 'ext_g4_s2_m_002',
            title: 'British Council - Help Your Classmate Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games',
            type: 'interactive',
            standard: 'Communication: Assist classmates in interpreting homework assignments',
            outcome: 'Can assist classmates in understanding gardening homework by drawing simple shapes or plants',
            duration: 'variable'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 5 | Beginner – A1.3
    // =========================================================
    grade_5: {

      // SCENARIO 1: Following Instructions at School
      // Themes: First, I Cut the Paper. | Let's Make a Poster!
      scenario_1_following_instructions_at_school: {
        listening: [
          {
            id: 'ext_g5_s1_l_001',
            title: 'Jack Hartmann - Follow the Instructions Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Follow clear instructions in learning activities',
            outcome: 'Can follow clear instructions in learning activities to complete a task',
            duration: '3:00'
          },
          {
            id: 'ext_g5_s1_l_002',
            title: 'British Council - Step by Step Instructions Listening',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/instructions',
            type: 'interactive',
            standard: 'Interactive: Execute multi-step directions in learning activities',
            outcome: 'Can follow and respond to multi-step directions in-class activities',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s1_l_003',
            title: 'Super Simple Songs - Let\'s Make a Craft',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Follow clear instructions in learning activities',
            outcome: 'Can respond appropriately to oral instructions (e.g., "Let\'s put away our books.")',
            duration: '2:30'
          },
          {
            id: 'ext_g5_s1_l_004',
            title: 'The Singing Walrus - Art Class Instructions',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=qhOTU8_1v4Y',
            type: 'song',
            standard: 'Interactive: Execute multi-step directions in learning activities',
            outcome: 'Can follow and respond to multi-step directions in-class activities',
            duration: '2:45'
          }
        ],
        speaking: [
          {
            id: 'ext_g5_s1_sp_001',
            title: 'British Council - Classroom Rules Speaking',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/classroom-rules',
            type: 'interactive',
            standard: 'Productive: Talk about simple rules and laws',
            outcome: 'Can describe basic classroom rules related to school projects',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s1_sp_002',
            title: 'Jack Hartmann - Safety Rules Chant',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Productive: Talk about simple rules and laws',
            outcome: 'Can explain safety rules at school when using classroom materials',
            duration: '2:45'
          },
          {
            id: 'ext_g5_s1_sp_003',
            title: 'Tongue Twisters - Six Slippery Snails',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/six-slippery-snails',
            type: 'tongue_twister',
            standard: 'Interactive: Answer questions about their daily routine',
            outcome: 'Can answer and ask follow-up questions to classmates about steps in a class project',
            duration: '1:00'
          },
          {
            id: 'ext_g5_s1_sp_004',
            title: 'Super Simple Songs - Art Class Rules',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Productive: Talk about simple rules and laws',
            outcome: 'Can describe basic classroom rules related to school projects',
            duration: '2:20'
          }
        ],
        reading: [
          {
            id: 'ext_g5_s1_r_001',
            title: 'British Council - Following Written Instructions Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/instructions',
            type: 'interactive',
            standard: 'Reading: Show comprehension of written instructions for classroom activities',
            outcome: 'Can show comprehension of written instructions for classroom activities by following them step-by-step',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s1_r_002',
            title: "Epic! - How to Make a Paper Airplane",
            source: 'Epic',
            url: 'https://www.getepic.com/book/how-to-make-paper-airplanes',
            type: 'ebook',
            standard: 'Reading: Demonstrate comprehension of basic descriptions in texts',
            outcome: 'Can demonstrate comprehension of basic descriptions in texts by summarizing key details',
            duration: '5:00'
          },
          {
            id: 'ext_g5_s1_r_003',
            title: 'Starfall - Compound Words and Syllables',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/syllables/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Decode English graphemes and phonemes using knowledge of word parts, syllabification',
            outcome: 'Can recognize and divide compound and multi-syllabic words into syllables',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g5_s1_w_001',
            title: 'Twinkl - Thank You Card for Helping',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/thank-you-card-template-classroom',
            type: 'worksheet',
            standard: 'Productive: Write thank-you cards',
            outcome: 'Can write a simple thank-you card to a classmate or teacher for helping with a class project',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s1_w_002',
            title: 'British Council - Written Questions and Answers',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/writing/questions-answers',
            type: 'interactive',
            standard: 'Interactive: Respond to written questions about a class reading assignment',
            outcome: 'Can answer simple written questions about steps in a class project',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g5_s1_m_001',
            title: 'British Council - School Announcements Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/school-announcements',
            type: 'interactive',
            standard: 'Text: Contextualize simple school announcements according to local needs',
            outcome: 'Can contextualize school announcements using gestures or visuals to highlight key details',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s1_m_002',
            title: 'Super Simple Songs - Explain it Simply',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Text: Simplify textbook content for peers',
            outcome: 'Can simplify classroom instructions or textbook content for peers using simple words and visuals',
            duration: '2:00'
          }
        ]
      },

      // SCENARIO 2: Taking Care of Our Class
      // Themes: We Are Sweeping the Floors. | Let's Arrange the Chairs.
      scenario_2_taking_care_of_our_class: {
        listening: [
          {
            id: 'ext_g5_s2_l_001',
            title: 'Jack Hartmann - Clean Up the Classroom',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Receptive: Identify specific information in announcements or recordings',
            outcome: 'Can identify specific information in announcements about classroom tasks',
            duration: '3:00'
          },
          {
            id: 'ext_g5_s2_l_002',
            title: 'British Council - Classroom Jobs Listening',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/classroom-jobs',
            type: 'interactive',
            standard: 'Interactive: Ask for repetition and clarification in a conversation about known topics',
            outcome: 'Can ask for repetition and clarification in conversations about classroom tasks',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s2_l_003',
            title: 'Cocomelon - Clean Up Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=H1e-6Ct4lKo',
            type: 'song',
            standard: 'Receptive: Identify specific information in announcements or recordings',
            outcome: 'Can identify specific details in recordings about classroom cleaning activities',
            duration: '2:30'
          },
          {
            id: 'ext_g5_s2_l_004',
            title: 'Super Simple Songs - The Cleaning Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Identify specific information in announcements or recordings',
            outcome: 'Can identify specific information in announcements about classroom tasks',
            duration: '2:20'
          }
        ],
        speaking: [
          {
            id: 'ext_g5_s2_sp_001',
            title: 'British Council - Give Directions in School',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/giving-directions',
            type: 'interactive',
            standard: 'Productive: Give simple directions within the school',
            outcome: 'Can give simple directions to find places in the school',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s2_sp_002',
            title: 'Jack Hartmann - What Are You Doing?',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'chant',
            standard: 'Interactive: Participate in short conversations about familiar topics',
            outcome: 'Can participate in short conversations about familiar tasks (e.g., "What are you doing?" "I am arranging the desks.")',
            duration: '2:45'
          },
          {
            id: 'ext_g5_s2_sp_003',
            title: 'Tongue Twisters - Through the Thick Fog',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters',
            type: 'tongue_twister',
            standard: 'Interactive: Participate in short conversations about familiar topics',
            outcome: 'Can ask and answer questions about their favorite activities',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g5_s2_r_001',
            title: 'British Council - Classroom Chores Reading',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/chores',
            type: 'interactive',
            standard: 'Reading: Extract specific information from short informational texts',
            outcome: 'Can extract specific information from short informational texts about classroom chores',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s2_r_002',
            title: "Epic! - Classroom Helpers (Nonfiction)",
            source: 'Epic',
            url: 'https://www.getepic.com/book/classroom-helpers',
            type: 'ebook',
            standard: 'Reading: Demonstrate comprehension of basic descriptions in texts',
            outcome: 'Can demonstrate comprehension of basic text descriptions by discussing what each chore means',
            duration: '5:00'
          },
          {
            id: 'ext_g5_s2_r_003',
            title: 'Starfall - Compound Words - Classroom',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/syllables/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Decode English graphemes and phonemes using knowledge of word parts, syllabification',
            outcome: 'Can decode English graphemes and phonemes using knowledge of compound words and syllable division',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g5_s2_w_001',
            title: 'Twinkl - Super Classroom Character Writing',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/superhero-character-description',
            type: 'worksheet',
            standard: 'Productive: Create short descriptions of favorite characters from books',
            outcome: 'Can describe a character involved in classroom tasks',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s2_w_002',
            title: 'British Council - Questions for Guest Speakers',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/writing/interview-questions',
            type: 'interactive',
            standard: 'Interactive: Draft questions for guest speakers',
            outcome: 'Can write simple questions for guest speakers (e.g., "How can we keep our classroom clean?")',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g5_s2_m_001',
            title: 'British Council - Explain Written Instructions',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games/instructions',
            type: 'interactive',
            standard: 'Text: Explain simple written instructions to peers',
            outcome: 'Can explain written instructions with simple steps and gestures',
            duration: 'variable'
          },
          {
            id: 'ext_g5_s2_m_002',
            title: 'Jack Hartmann - Let\'s Discuss Clean Classrooms',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Communication: Facilitate discussions on classroom topics among peers',
            outcome: 'Can facilitate discussions by asking classmates questions, encouraging answers',
            duration: '3:00'
          }
        ]
      }
    },

    // =========================================================
    // GRADE 6 | High Beginner – A2.1
    // =========================================================
    grade_6: {

      // SCENARIO 1: Our Community News
      // Themes: Reporting From the School! | Our Community Is Famous For...
      scenario_1_our_community_news: {
        listening: [
          {
            id: 'ext_g6_s1_l_001',
            title: 'British Council - Community News Listening',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/community-news',
            type: 'interactive',
            standard: 'Receptive: Recognize the main ideas of longer conversational exchanges',
            outcome: 'Can recognize the main ideas in school news reports about community events',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_l_002',
            title: 'Jack Hartmann - My Community Song',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Respond to questions about requesting information',
            outcome: 'Can respond to simple questions when classmates ask for information about community events',
            duration: '3:00'
          },
          {
            id: 'ext_g6_s1_l_003',
            title: 'British Council - Local Traditions Listening',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/local-traditions',
            type: 'interactive',
            standard: 'Receptive: Recognize the main ideas of longer conversational exchanges',
            outcome: 'Can identify specific details in conversations about local traditions and places',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_l_004',
            title: 'Super Simple Songs - Our Town Report',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Interactive: Respond to questions about requesting information',
            outcome: 'Can respond to simple questions when classmates ask for information about community events',
            duration: '2:30'
          }
        ],
        speaking: [
          {
            id: 'ext_g6_s1_sp_001',
            title: 'British Council - Describe a Person Speaking Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/describe-a-person',
            type: 'interactive',
            standard: 'Productive: Describe others based on physical traits, personality, and type of relationship',
            outcome: 'Can describe community members featured in local news using physical traits and personality adjectives',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_sp_002',
            title: 'Jack Hartmann - Community Events Discussion',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Interactive: Exchange information on familiar topics with peers',
            outcome: 'Can ask and answer questions about community events and traditions with peers',
            duration: '3:00'
          },
          {
            id: 'ext_g6_s1_sp_003',
            title: 'Tongue Twisters - Around the Rugged Rock',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/around-the-rugged-rock',
            type: 'tongue_twister',
            standard: 'Interactive: Exchange information on familiar topics with peers',
            outcome: 'Can exchange information with peers about popular landmarks in their community',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g6_s1_r_001',
            title: 'British Council - Community Events Reading',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/community-events',
            type: 'interactive',
            standard: 'Reading: Identify specific information from fictional short texts',
            outcome: 'Can identify specific information about community events in short fictional texts',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_r_002',
            title: "Epic! - Festivals Around the World",
            source: 'Epic',
            url: 'https://www.getepic.com/book/festivals-around-the-world',
            type: 'ebook',
            standard: 'Reading: Identify the sequence of events in simple stories',
            outcome: 'Can recognize the sequence of events in simple stories about community traditions',
            duration: '5:00'
          },
          {
            id: 'ext_g6_s1_r_003',
            title: 'Starfall - Short and Long Vowel Sounds',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/vowels/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Demonstrate knowledge of phonemic awareness by identifying short and long vowel sounds',
            outcome: 'Can identify short and long vowel sounds in words related to community events',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g6_s1_w_001',
            title: 'Twinkl - Personal Journal Entry Template',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/journal-entry-template',
            type: 'worksheet',
            standard: 'Productive: Write personal journal entries about daily experiences',
            outcome: 'Can write personal journal entries describing recent community events they attended',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_w_002',
            title: 'British Council - Community News Report Writing',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/writing/news-report',
            type: 'interactive',
            standard: 'Interactive: Write a short descriptive text about personal plans for various activities',
            outcome: 'Can create a simple community news report about a local event using descriptive adjectives',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g6_s1_m_001',
            title: 'British Council - Summarize the Article Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/summarize',
            type: 'interactive',
            standard: 'Text: Write simple interpretations of common texts in English supported with visual aids',
            outcome: 'Can write simple summaries of community news articles with visual support',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s1_m_002',
            title: 'Jack Hartmann - Explain the Main Points',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Text: Explain the main points of class readings to peers',
            outcome: 'Can explain the main points of class readings about Panamanian traditions using visuals',
            duration: '3:00'
          }
        ]
      },

      // SCENARIO 2: Keeping Our Communities Clean
      // Themes: We Should Clean the Classroom on Friday. | Who Will Bring the Cleaning Supplies?
      scenario_2_keeping_our_communities_clean: {
        listening: [
          {
            id: 'ext_g6_s2_l_001',
            title: 'British Council - Environmental Announcements Listening',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/environment',
            type: 'interactive',
            standard: 'Receptive: Identify specific details in spoken announcements',
            outcome: 'Can identify specific details in spoken announcements about the school',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s2_l_002',
            title: 'Jack Hartmann - Keep Our Community Clean',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'song',
            standard: 'Interactive: Interpret audio clips from class lessons to support class discussions',
            outcome: 'Can interpret key details from audio clips about the community (e.g., "We need to clean the river.")',
            duration: '3:00'
          },
          {
            id: 'ext_g6_s2_l_003',
            title: 'Super Simple Songs - Take Care of Our Earth',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=4t_6VCXxQIc',
            type: 'song',
            standard: 'Receptive: Identify specific details in spoken announcements',
            outcome: 'Can discuss main points about keeping communities clean (e.g., "We should work together.")',
            duration: '2:30'
          },
          {
            id: 'ext_g6_s2_l_004',
            title: 'British Council - Recycling Listening Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/listening/recycling',
            type: 'interactive',
            standard: 'Interactive: Interpret audio clips from class lessons to support class discussions',
            outcome: 'Can interpret key details from audio clips about the community',
            duration: 'variable'
          }
        ],
        speaking: [
          {
            id: 'ext_g6_s2_sp_001',
            title: 'British Council - Describe Your Routine Speaking',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/speaking/daily-routine',
            type: 'interactive',
            standard: 'Productive: Describe familiar everyday activities in detail',
            outcome: 'Can describe a routine cleanup schedule (e.g., "First, I study. Then, I clean my desk.")',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s2_sp_002',
            title: 'Jack Hartmann - Brainstorm Together',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Interactive: Brainstorm questions in a group',
            outcome: 'Can brainstorm questions for organizing a cleanup (e.g., "What supplies do we need?")',
            duration: '3:00'
          },
          {
            id: 'ext_g6_s2_sp_003',
            title: 'Tongue Twisters - Mixed Biscuits',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters/mixed-biscuits',
            type: 'tongue_twister',
            standard: 'Interactive: Brainstorm questions in a group',
            outcome: 'Can exchange information about recycling (e.g., "When is recycling picked up?" "It\'s on Monday.")',
            duration: '1:00'
          }
        ],
        reading: [
          {
            id: 'ext_g6_s2_r_001',
            title: 'British Council - Charts and Graphs Reading',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/reading/charts',
            type: 'interactive',
            standard: 'Reading: Interpret simple charts and graphs related to texts',
            outcome: 'Can interpret data in charts about community activities (e.g., "Most students like to clean the garden.")',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s2_r_002',
            title: "Epic! - Why Should I Recycle?",
            source: 'Epic',
            url: 'https://www.getepic.com/book/why-should-i-recycle',
            type: 'ebook',
            standard: 'Reading: Analyze characters\' actions and motives in stories',
            outcome: 'Can analyze actions and motives of characters in short stories about supporting the community',
            duration: '5:00'
          },
          {
            id: 'ext_g6_s2_r_003',
            title: 'Starfall - Short and Long Vowels in Context',
            source: 'Starfall',
            url: 'https://www.starfall.com/h/abcs/vowels/',
            type: 'interactive',
            standard: 'Phonemic Awareness: Demonstrate knowledge of phonemic awareness by identifying short and long vowel sounds',
            outcome: 'Can demonstrate knowledge of phonemic awareness by identifying short and long vowel sounds in orally stated single-syllable words',
            duration: 'variable'
          }
        ],
        writing: [
          {
            id: 'ext_g6_s2_w_001',
            title: 'Twinkl - Steps to Solve a Problem Writing Template',
            source: 'Twinkl',
            url: 'https://www.twinkl.com/resource/problem-solving-steps-template',
            type: 'worksheet',
            standard: 'Productive: Create lists of steps for solving problems',
            outcome: 'Can list steps to organize a cleanup (e.g., "Gather gloves, bags, and bins.")',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s2_w_002',
            title: 'British Council - Research Questions Writing',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/writing/research-questions',
            type: 'interactive',
            standard: 'Interactive: Write questions for a classroom research project',
            outcome: 'Can write questions for a cleanup research project collaboratively',
            duration: 'variable'
          }
        ],
        mediation: [
          {
            id: 'ext_g6_s2_m_001',
            title: 'British Council - Simplify the Instructions Activity',
            source: 'British Council',
            url: 'https://learnenglishkids.britishcouncil.org/games/simplify-instructions',
            type: 'interactive',
            standard: 'Text: Simplify complex instructions for classmates',
            outcome: 'Can simplify complex instructions by using a combination of writing, visuals, symbols, and drawings to show steps',
            duration: 'variable'
          },
          {
            id: 'ext_g6_s2_m_002',
            title: 'Jack Hartmann - Confirm What You Heard',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=3wOOJ6QpF8w',
            type: 'discussion_activity',
            standard: 'Communication: Confirm comprehension of peer contributions during discussions',
            outcome: 'Can confirm understanding by repeating peer contributions and adding visuals',
            duration: '2:45'
          }
        ]
      }
    }
  },

  // =========================================================
  // CROSS-GRADE RESOURCES
  // =========================================================
  cross_grade: {
    phonics: [
      {
        id: 'cross_phonics_001',
        title: 'Starfall - ABCs',
        source: 'Starfall',
        url: 'https://www.starfall.com/h/abc/',
        type: 'interactive',
        grades: ['pre_k', 'kinder', 'grade_1'],
        skills: ['reading', 'listening'],
        standard: 'Phonemic Awareness: Identify environmental sounds and speech sounds',
        outcome: 'Can identify the source of environmental or speech sounds'
      },
      {
        id: 'cross_phonics_002',
        title: 'Jack Hartmann - Phonics Songs Collection',
        source: 'YouTube',
        url: 'https://www.youtube.com/c/JackHartmann',
        type: 'playlist',
        grades: ['pre_k', 'kinder', 'grade_1', 'grade_2'],
        skills: ['reading', 'listening'],
        standard: 'Phonemic Awareness: Identify sounds of the letters of the alphabet',
        outcome: 'Can identify the sounds of the letters of the alphabet'
      }
    ],
    songs: [
      {
        id: 'cross_songs_001',
        title: 'Super Simple Songs - Collection',
        source: 'YouTube',
        url: 'https://www.youtube.com/c/supersimplesongs',
        type: 'playlist',
        grades: ['pre_k', 'kinder', 'grade_1', 'grade_2'],
        skills: ['listening', 'speaking'],
        standard: 'Receptive: Recognize familiar words and basic phrases',
        outcome: 'Can recognize familiar words spoken slowly'
      },
      {
        id: 'cross_songs_002',
        title: 'British Council - Songs and Chants',
        source: 'British Council',
        url: 'https://learnenglishkids.britishcouncil.org/songs',
        type: 'playlist',
        grades: ['pre_k', 'kinder', 'grade_1', 'grade_2', 'grade_3', 'grade_4'],
        skills: ['listening', 'speaking'],
        standard: 'Receptive: Recognize familiar words and basic phrases',
        outcome: 'Can recognize familiar words and phrases in songs and chants'
      }
    ],
    ebooks: [
      {
        id: 'cross_ebooks_001',
        title: 'Epic! - Educator Library',
        source: 'Epic',
        url: 'https://www.getepic.com',
        type: 'platform',
        grades: ['pre_k', 'kinder', 'grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6'],
        skills: ['reading'],
        standard: 'Reading: Show comprehension of simple texts',
        outcome: 'Can show comprehension of familiar texts at grade level',
        requires_login: true,
        educator_free: true
      }
    ],
    tongue_twisters: [
      {
        id: 'cross_tt_001',
        title: 'British Council - Tongue Twisters Collection',
        source: 'British Council',
        url: 'https://learnenglishkids.britishcouncil.org/tongue-twisters',
        type: 'collection',
        grades: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6'],
        skills: ['speaking'],
        standard: 'Productive: Use basic words or phrases',
        outcome: 'Can practice pronunciation and fluency through tongue twisters'
      }
    ]
  },

  // =========================================================
  // SOURCES
  // =========================================================
  sources: {
    youtube: {
      name: 'YouTube',
      base_url: 'https://www.youtube.com',
      requires_internet: true,
      offline_capable: false
    },
    starfall: {
      name: 'Starfall',
      base_url: 'https://www.starfall.com',
      requires_internet: true,
      offline_capable: false
    },
    british_council: {
      name: 'British Council',
      base_url: 'https://learnenglishkids.britishcouncil.org',
      requires_internet: true,
      offline_capable: false
    },
    oxford_owl: {
      name: 'Oxford Owl',
      base_url: 'https://www.oxfordowl.co.uk',
      requires_internet: true,
      offline_capable: false,
      requires_login: true
    },
    epic: {
      name: 'Epic!',
      base_url: 'https://www.getepic.com',
      requires_internet: true,
      offline_capable: true,
      requires_login: true,
      educator_free: true
    },
    scholastic: {
      name: 'Scholastic',
      base_url: 'https://www.scholastic.com',
      requires_internet: true,
      offline_capable: false
    },
    twinkl: {
      name: 'Twinkl',
      base_url: 'https://www.twinkl.com',
      requires_internet: true,
      offline_capable: false,
      requires_login: true
    },
    abcmouse: {
      name: 'ABCmouse',
      base_url: 'https://www.abcmouse.com',
      requires_internet: true,
      offline_capable: false,
      requires_login: true
    },
    storynory: {
      name: 'Storynory',
      base_url: 'https://www.storynory.com',
      requires_internet: true,
      offline_capable: false
    }
  }
};

// =========================================================
// MANAGER CLASS
// =========================================================
class ExternalResourceManager {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
  }

  getResources(grade, scenario, skill = null) {
    const gradeData = this.config.grades[grade];
    if (!gradeData) return [];
    const scenarioData = gradeData[scenario];
    if (!scenarioData) return [];
    if (skill) return scenarioData[skill] || [];
    const allResources = [];
    for (let s in scenarioData) allResources.push(...scenarioData[s]);
    return allResources;
  }

  getCrossGradeResources(grade, skill = null) {
    const resources = [];
    for (let category in this.config.cross_grade) {
      for (let resource of this.config.cross_grade[category]) {
        if (resource.grades.includes(grade)) {
          if (!skill || resource.skills.includes(skill)) resources.push(resource);
        }
      }
    }
    return resources;
  }

  mergeWithBase(baseData, grade, scenario) {
    const external = this.getResources(grade, scenario);
    const crossGrade = this.getCrossGradeResources(grade);
    if (!baseData[scenario]) baseData[scenario] = {};
    for (let resource of external) {
      const skill = this.inferSkill(resource) || 'general';
      if (!baseData[scenario][skill]) baseData[scenario][skill] = [];
      baseData[scenario][skill].push({ ...resource, source_type: 'external_config', added_date: this.config.lastUpdated });
    }
    for (let resource of crossGrade) {
      const skills = resource.skills || ['general'];
      for (let skill of skills) {
        if (!baseData[scenario][skill]) baseData[scenario][skill] = [];
        const exists = baseData[scenario][skill].some(r => r.id === resource.id);
        if (!exists) baseData[scenario][skill].push({ ...resource, source_type: 'cross_grade', added_date: this.config.lastUpdated });
      }
    }
    return baseData;
  }

  inferSkill(resource) {
    if (resource.skill) return resource.skill;
    const tags = resource.tags || [];
    const type = resource.type || '';
    if (tags.includes('listening') || type === 'song' || type === 'audio' || type === 'chant' || type === 'rap' || type === 'audio_story') return 'listening';
    if (tags.includes('reading') || type === 'ebook' || type === 'read_aloud') return 'reading';
    if (tags.includes('writing') || type === 'worksheet' || type === 'drawing_activity' || type === 'craft') return 'writing';
    if (tags.includes('speaking') || type === 'pronunciation_video' || type === 'tongue_twister' || type === 'action_song') return 'speaking';
    if (tags.includes('mediation') || type === 'discussion_activity') return 'mediation';
    if (type === 'interactive') return 'reading';
    return 'general';
  }

  getSourceInfo(sourceKey) { return this.config.sources[sourceKey] || null; }
  listSources() { return Object.keys(this.config.sources).map(key => ({ key, ...this.config.sources[key] })); }
  filterByTags(resources, tags) {
    if (!tags || tags.length === 0) return resources;
    return resources.filter(r => { const rt = r.tags || []; return tags.some(t => rt.includes(t)); });
  }
  searchResources(grade, query) {
    const resources = this.getResources(grade);
    const lq = query.toLowerCase();
    return resources.filter(r => r.title.toLowerCase().includes(lq) || (r.tags && r.tags.some(t => t.toLowerCase().includes(lq))) || (r.standard && r.standard.toLowerCase().includes(lq)));
  }
  getVersion() { return { version: this.config.version, lastUpdated: this.config.lastUpdated }; }
  hasNewResources(sinceDate) { return new Date(this.config.lastUpdated) > new Date(sinceDate); }

  // Utility: count all resources
  countAll() {
    let total = 0;
    for (let grade in this.config.grades) {
      for (let scenario in this.config.grades[grade]) {
        for (let skill in this.config.grades[grade][scenario]) {
          total += this.config.grades[grade][scenario][skill].length;
        }
      }
    }
    return total;
  }
}

const externalResourceManager = new ExternalResourceManager(EXTERNAL_RESOURCES_CONFIG);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXTERNAL_RESOURCES_CONFIG, ExternalResourceManager, externalResourceManager };
}
