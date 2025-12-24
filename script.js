// Datos del calendario: preguntas y contenido para cada día
        const calendarData = [
            { 
                day: 1, 
                question: "¿De qué color es la nariz de Rodolfo el reno?", 
                message: "¡Correcto! Rojo como el amor que siento por ti. Disfruta este pequeño saludo navideño.",
                content: 'video',
                videoUrl: './img/dia1.mp4',
                videoTitle: 'Saludo navideño'
            },
            { 
                day: 2, 
                question: "¿Qué es lo mejor que sabes hacer?", 
                message: "Exacto, eres perfecto. Sinceramente, pienso que eres un hombre con demasiadas virtudes y cualidades, eres demasiado habilidoso, eres muy buen programador, un excelente electricista e incluso un buen albañil, eres bueno haciendo cualquier cosa, y lo que no sabes hacer, lo aprendes sin problema alguno. Pero sobre todo eres el mejor siendo mi novio. Te amo ♥",
                content: 'text'
            },
            { 
                day: 3, 
                question: "¿Qué plan te gustaría hacer conmigo pronto?", 
                message: "Excelente, está decidido. Pon fecha porque el día que tú digas haremos ese plan, ya quiero que suceda.",
                content: 'voucher',
                voucherText: "✨ VALE PARA CUMPLIR TU PLAN ✨<br>Este vale es canjeable por el plan que mencionaste. ¡Solo tienes que elegir la fecha!",
                voucherIcon: "🎯"
            },
            { 
                day: 4, 
                question: "¿Cuándo nos dimos nuestro primer beso?", 
                message: "Espero que hayas respondido 10 de noviembre de 2023. Recuerdas ese día, no solo nos dimos nuestro primer besito, minutos antes te había dado besos en el cachete, recuerdo que te sorprendiste, recuerdo cómo me sentía y las mariposas que tenía en mi estómago, si pudiera volver a vivir un momento contigo ese podría ser un buen momento.",
                content: 'text'
            },
            { 
                day: 5, 
                question: "¿Qué canción nos representa?", 
                message: "Muy bonita canción. Aquí tienes una mini playlist de canciones que me recuerdan a nosotros:",
                content: 'playlist',
                playlist: [
                    {title: "Solo por Vos", artist: "Trueno"},
                    {title: "Quiero", artist: "Kevin Kaarl"},
                    {title: "Contigo", artist: "Marcos Menchaca"},
                    {title: "Macchu Picch", artist: "Camilo"}
                ]
            },
            { 
                day: 6, 
                question: "Completa la frase: 'Un gran poder...'", 
                message: "¡Exacto! 'Un gran poder conlleva una gran responsabilidad'. Más te vale que no te hayas equivocado. Te invito a hacer un maratón de películas de Spiderman, con sabritas, refresco y agua super mega helada para ti, ¿aceptas? ♥️🕸️",
                content: 'voucher',
                voucherText: "✨ VALE PARA MARATÓN DE SPIDERMAN ✨<br>Incluye: Películas, chucherias y compañía garantizada.",
                voucherIcon: "🎬"
            },
            { 
                day: 7, 
                question: "¿Qué cosa mía te hace reír?", 
                message: "Me encanta que te haga reír. Aquí tienes un pequeño collage con fotos nuestras para que sonrías un poco más:",
                content: 'image',
                imageUrl: './img/dia7.jpeg',
                imageAlt: 'Collage de fotos nuestras'
            },
            { 
                day: 8, 
                question: "¿Qué lugar te recuerda a mí?", 
                message: "En mi caso no lo sé, cada lugar en el que he estado contigo guarda varios momentos especiales, por ejemplo la uni, que es donde empezó todo, o el recorcholis que me recuerda las veces en que hemos ganado 400 tickets, o las tiendas chinas porque sé que no te gusta ir y aun así me acompañas, cada recuerdo contigo es algo que almaceno en mi mente y mi corazón. Te amo.",
                content: 'text'
            },
            { 
                day: 9, 
                question: "¿Qué canción de Trueno te gusta más?", 
                message: "'Siempre fuiste un punto aparte entre tanta gente, Yo siempre tan ignorante, pero transparente, Buscando desayunarte como pan caliente, Convirtiendo tus instantes en un para siempre' - Trueno",
                content: 'text'
            },
            { 
                day: 10, 
                question: "¿Qué emoji me representa?", 
                message: "Para mí eres especial. Si tuviera que elegir alguna foto que me guste mucho de ti sería esta, me gusta mucho tu sonrisa y el brillo de tus ojos, eres muy hermoso.",
                content: 'image',
                imageUrl: './img/dia10.jpg',
                imageAlt: 'Foto especial tuya'
            },
            { 
                day: 11, 
                question: "¿Qué te gusta más de la navidad?", 
                message: "¡Qué bonito! La navidad contigo es especial. Aquí tienes una fotito navideña de nosotros, ¿qué opinas?",
                content: 'image',
                imageUrl: './img/dia11.jpeg',
                imageAlt: 'Foto navideña nuestra'
            },
            { 
                day: 12, 
                question: "¿Qué crees que es lo que más nos representa?", 
                message: "Aquí tienes una imagen caricaturesca de nosotros. ¡Espero que te guste!",
                content: 'image',
                imageUrl: './img/dia12.png',
                imageAlt: 'Imagen de nosotros'
            },
            { 
                day: 13, 
                question: "¿Qué palabra usarías para describirme hoy?", 
                message: "Tu eres perfectamente imperfecto, tienes demasiadas cualidades y tal vez alguno que otro defecto, pero no cambiaría nada de ti, porque cada aspecto de tu personalidad te hace ser tú y te amo así como eres, todo enojoncito pero divertido, educado pero llevadito conmigo. ¡Me encantas!!♥️",
                content: 'image',
                imageUrl: './img/dia13.jpg',
                imageAlt: 'Imagen de nosotros'
            },
            { 
                day: 14, 
                question: "¿Qué videojuego hemos jugado más juntos?", 
                message: "¡Así es! Tenemos muchos recuerdos jugando ese juego. Aquí un video de nuestros mejores momentos virtuales juntos.",
                content: 'video',
                videoUrl: './img/dia14.mp4',
                videoTitle: 'Nuestros momentos de juego'
            },
            { 
                day: 15, 
                question: "¿Qué juego te gustaría jugar conmigo?", 
                message: "¡Excelente elección! Prometo jugar contigo pronto.",
                content: 'voucher',
                voucherText: "✨🎮 VALE PARA JUGAR FORTNITE JUNTOS 🎮✨<br>Válido para sesiones de juego cuando tú quieras.",
                voucherIcon: "🎮"
            },
            { 
                day: 16, 
                question: "¿Qué promesa te gustaría hacerte a ti mismo?", 
                message: "Es una promesa muy importante. Aquí tienes una cartita de mi para ti.",
                content: 'image',
                imageUrl: './img/dia16.png',
                imageTitle: 'cartita'
            },
            { 
                day: 17, 
                question: "¿Qué serie hemos visto juntos que más te ha gustado?", 
                message: "¡Es una excelente serie! Tenemos que ver más series juntos pronto.",
                content: 'voucher',
                voucherText: "✨ VALE PARA INICIAR UNA SERIE JUNTOS ✨",
                voucherIcon: "🍿"
            },
            { 
                day: 18, 
                question: "¿Cuál es alguna frase típica mía?", 
                message: "Me encanta la atención que me pones, que seas tan atento a los detalles conmigo. Prometo que esto será recíproco.",
                content: 'image',
                imageUrl: './img/dia18.png',
                imageTitle: 'fotito'
            },
            { 
                day: 19, 
                question: "Si nuestra relación fuera una película, ¿qué nombre le pondrías?", 
                message: "¡Qué nombre tan bonito! Quiero seguir creando nuevos recuerdos a tu lado.",
                content: 'video',
                videoUrl: './img/dia19.mp4',
                videoTitle: 'Nuestra historia'
            },
            { 
                day: 23, 
                question: "¿Qué es lo que más te gusta de mí (físicamente)?", 
                message: "¡Qué dulce! Te hice un dibujito de ti, espero te guste.",
                content: 'image',
                imageUrl: './img/dia20.jpg',
                imageAlt: 'Dibujo hecho para ti'
            },
            { 
                day: 21, 
                question: "¿Quién es la persona más asombrosa del mundo?", 
                message: "¡Tú, obviamente! Aquí tienes un diploma que lo demuestra.",
                content: 'image',
                imageUrl: './img/dia21.png',
                imageAlt: 'Diploma'
            },
            { 
                day: 22, 
                question: "¿Cuál es tu carro favorito?", 
                message: "¡Excelente gusto! De regalito de un Hot Wheels Ford Mustang Dark Horse, para tu colección. 🚘",
                content: 'text'
            },
            { 
                day: 20, 
                question: "¿De qué color es el primer peluche que me regalaste?", 
                message: "¡Exacto! Era gris. Mira a todos nuestros peluches juntos en esta foto, me encantan, 2 años de colección.",
                content: 'image',
                imageUrl: './img/dia23.jpg',
                imageAlt: 'Dibujo hecho para ti'
            },
            { 
                day: 24, 
                question: "¿Qué es lo que más extrañas de mí cuando no estoy contigo?", 
                message: "Esta es la última pregunta, mi amor. Lo que más extraño cuando no estás es tu esencia completa. Pero hoy, en Navidad, te tengo aquí y eres el mejor regalo que la vida me pudo dar. Te amo más de lo que las palabras pueden expresar. Feliz Navidad, mi amor.",
                content: 'video',
                videoUrl: './img/dia24.mp4',
                videoTitle: 'Video navideño'
            }
        ];

        // Estado del calendario
        let unlockedDays = JSON.parse(localStorage.getItem('adventCalendarUnlocked')) || [];
        let currentDay = new Date().getDate();
        const maxDay = 24;
        
        // Elementos DOM
        const calendarGrid = document.getElementById('calendar-grid');
        const questionModal = document.getElementById('question-modal');
        const messageModal = document.getElementById('message-modal');
        const closeModalBtn = document.getElementById('close-modal');
        const closeMessageModalBtn = document.getElementById('close-message-modal');
        const submitBtn = document.getElementById('submit-btn');
        const answerInput = document.getElementById('answer-input');
        const questionDay = document.getElementById('question-day');
        const questionText = document.getElementById('question-text');
        const messageTitle = document.getElementById('message-title');
        const messageContent = document.getElementById('message-content');
        const messageDate = document.getElementById('message-date');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        // Variable para almacenar el día seleccionado actualmente
        let selectedDay = 0;
        
        // Inicializar el calendario
        function initCalendar() {
            calendarGrid.innerHTML = '';
            
            for (let i = 1; i <= maxDay; i++) {
                const dayCard = document.createElement('div');
                dayCard.className = 'day-card';
                dayCard.id = `day-${i}`;
                
                if (unlockedDays.includes(i)) {
                    dayCard.classList.add('unlocked');
                } else if (i <= currentDay) {
                    dayCard.classList.add('locked');
                } else {
                    dayCard.classList.add('locked');
                    dayCard.style.opacity = '0.6';
                    dayCard.title = "Todavía no es el momento para este día";
                }
                
                dayCard.innerHTML = `
                    <div class="day-number">${i}</div>
                    ${unlockedDays.includes(i) ? '<i class="fas fa-unlock lock-icon"></i>' : '<i class="fas fa-lock lock-icon"></i>'}
                `;
                
                if (i <= currentDay && !unlockedDays.includes(i)) {
                    dayCard.addEventListener('click', () => openQuestionModal(i));
                } else if (unlockedDays.includes(i)) {
                    dayCard.addEventListener('click', () => showMessage(i));
                }
                
                calendarGrid.appendChild(dayCard);
            }
            
            updateProgress();
            createSnowflakes();
        }
        
        // Actualizar la barra de progreso
        function updateProgress() {
            const progress = (unlockedDays.length / maxDay) * 100;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${unlockedDays.length} de ${maxDay} días desbloqueados`;
        }
        
        // Abrir modal de pregunta
        function openQuestionModal(day) {
            selectedDay = day;
            const dayData = calendarData.find(d => d.day === day);
            
            questionDay.textContent = `Día ${day}`;
            questionText.textContent = dayData.question;
            answerInput.value = '';
            
            questionModal.classList.add('active');
            answerInput.focus();
        }
        
        // Cerrar modal de pregunta
        function closeQuestionModal() {
            questionModal.classList.remove('active');
        }
        
        // Mostrar mensaje
        function showMessage(day) {
            selectedDay = day;
            const dayData = calendarData.find(d => d.day === day);
            
            messageTitle.textContent = `¡Día ${day} desbloqueado!`;
            messageDate.textContent = `Día ${day} - ${day} de Diciembre`;
            
            // Generar contenido según el tipo
            let contentHTML = '';
            
            if (dayData.content === 'text') {
                contentHTML = `<p class="message-text">${dayData.message}</p>`;
            } 
            else if (dayData.content === 'image') {
                contentHTML = `
                    <p class="message-text">${dayData.message}</p>
                    <div class="media-container">
                        <img src="${dayData.imageUrl}" alt="${dayData.imageAlt || 'Imagen'}" class="message-image">
                    </div>
                `;
            }
            else if (dayData.content === 'video') {
                contentHTML = `
                    <p class="message-text">${dayData.message}</p>
                    <div class="media-container">
                        <iframe class="message-video" src="${dayData.videoUrl}" title="${dayData.videoTitle || 'Video'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;
            }
            else if (dayData.content === 'playlist') {
                let playlistHTML = '';
                dayData.playlist.forEach((song, index) => {
                    playlistHTML += `
                        <div class="playlist-item">
                            <strong>${index + 1}. ${song.title}</strong> - ${song.artist}
                        </div>
                    `;
                });
                
                contentHTML = `
                    <p class="message-text">${dayData.message}</p>
                    <div class="playlist-container">
                        <div class="playlist-title">🎵 Nuestra Playlist Especial 🎵</div>
                        ${playlistHTML}
                    </div>
                `;
            }
            else if (dayData.content === 'diploma') {
                contentHTML = `
                    <p class="message-text">${dayData.message}</p>
                    <div class="diploma">
                        <div class="diploma-title">${dayData.diplomaTitle}</div>
                        <div class="diploma-text">Otorgado a: <strong>Mi Novio Perfecto</strong></div>
                        <div class="diploma-text">${dayData.diplomaText}</div>
                        <div class="diploma-text" style="margin-top: 20px;">Firma: <em>${dayData.diplomaSignature}</em></div>
                    </div>
                `;
            }
            else if (dayData.content === 'voucher') {
                contentHTML = `
                    <p class="message-text">${dayData.message}</p>
                    <div class="voucher">
                        <div class="voucher-title">${dayData.voucherIcon || '🎁'} ${dayData.voucherText} ${dayData.voucherIcon || '🎁'}</div>
                    </div>
                `;
            }
            
            messageContent.innerHTML = contentHTML;
            messageModal.classList.add('active');
        }
        
        // Cerrar modal de mensaje
        function closeMessageModal() {
            messageModal.classList.remove('active');
        }
        
        // Desbloquear un día
        function unlockDay() {
            const answer = answerInput.value.trim();
            
            if (answer === '') {
                alert('Por favor, escribe una respuesta antes de desbloquear el día.');
                return;
            }
            
            let answers = JSON.parse(localStorage.getItem('adventCalendarAnswers')) || {};
            answers[selectedDay] = answer;
            localStorage.setItem('adventCalendarAnswers', JSON.stringify(answers));
            
            if (!unlockedDays.includes(selectedDay)) {
                unlockedDays.push(selectedDay);
                localStorage.setItem('adventCalendarUnlocked', JSON.stringify(unlockedDays));
            }
            
            const dayCard = document.getElementById(`day-${selectedDay}`);
            dayCard.classList.remove('locked');
            dayCard.classList.add('unlocked');
            dayCard.innerHTML = `
                <div class="day-number">${selectedDay}</div>
                <i class="fas fa-unlock lock-icon"></i>
            `;
            
            dayCard.addEventListener('click', () => showMessage(selectedDay));
            
            closeQuestionModal();
            updateProgress();
            
            setTimeout(() => {
                showMessage(selectedDay);
            }, 500);
        }
        
        // Crear efecto de nieve
        function createSnowflakes() {
            const snowflakesContainer = document.getElementById('snowflakes');
            const snowflakeCount = 50;
            
            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                const size = Math.random() * 10 + 5;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                
                snowflake.style.left = `${Math.random() * 100}vw`;
                
                const duration = Math.random() * 10 + 5;
                snowflake.style.animationDuration = `${duration}s`;
                
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                
                snowflakesContainer.appendChild(snowflake);
            }
        }
        
        // Event listeners
        closeModalBtn.addEventListener('click', closeQuestionModal);
        closeMessageModalBtn.addEventListener('click', closeMessageModal);
        submitBtn.addEventListener('click', unlockDay);
        
        questionModal.addEventListener('click', (e) => {
            if (e.target === questionModal) {
                closeQuestionModal();
            }
        });
        
        messageModal.addEventListener('click', (e) => {
            if (e.target === messageModal) {
                closeMessageModal();
            }
        });
        
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                unlockDay();
            }
        });
        
        // Inicializar el calendario
        document.addEventListener('DOMContentLoaded', initCalendar);