// src/JeopardyGame/JeopardyGame.jsx
import React, { useState } from 'react';
import './JeopardyGame.css';
import sverchok from '../../public/images/sverchok.jpg';
import h1 from '../../public/images/Who and where/1h.jpg';
import h2 from '../../public/images/Who and where/2h.jpg';
import h3 from '../../public/images/Who and where/3h.jpg';
import h4 from '../../public/images/Who and where/4h.jpg';
import h5 from '../../public/images/Who and where/5h.jpg';
import o1 from '../../public/images/Who and where/1o.jpg';
import o2 from '../../public/images/Who and where/2o.jpg';
import o3 from '../../public/images/Who and where/3o.jpg';
import o4 from '../../public/images/Who and where/4o.jpg';
import o5 from '../../public/images/Who and where/5o.jpg';
import с1 from '../../public/images/Connected/1c.jpg';
import с2 from '../../public/images/Connected/2c.jpg';
import с3 from '../../public/images/Connected/3c.jpg';
import с4 from '../../public/images/Connected/4c.jpg';
import с5 from '../../public/images/Connected/5c.jpg';
import ph11 from '../../public/images/Connected/11.jpg';
import ph12 from '../../public/images/Connected/12.jpg';
import ph21 from '../../public/images/Connected/21.jpg';
import ph22 from '../../public/images/Connected/22.jpg';
import ph31 from '../../public/images/Connected/31.jpg';
import ph32 from '../../public/images/Connected/32.jpg';
import ph41 from '../../public/images/Connected/41.jpg';
import ph42 from '../../public/images/Connected/42.jpg';
import ph51 from '../../public/images/Connected/51.jpg';
import ph52 from '../../public/images/Connected/52.jpg';
import hS1 from '../../public/images/Shakoblokun/1h.jpg';
import hS2 from '../../public/images/Shakoblokun/2h.jpg';
import hS3 from '../../public/images/Shakoblokun/3h.jpg';
import hS4 from '../../public/images/Shakoblokun/4h.jpg';
import hS5 from '../../public/images/Shakoblokun/5h.jpg';
import oS1 from '../../public/images/Shakoblokun/1o.jpg';
import oS2 from '../../public/images/Shakoblokun/2o.jpg';
import oS3 from '../../public/images/Shakoblokun/3o.jpg';
import oS4 from '../../public/images/Shakoblokun/4o.jpg';
import oS5 from '../../public/images/Shakoblokun/5o.jpg';
import m1 from '../../public/images/Mem/1.jpg';
import m2 from '../../public/images/Mem/2.jpg';
import m3 from '../../public/images/Mem/3.jpg';
import m4 from '../../public/images/Mem/4.jpg';
import m5 from '../../public/images/Mem/5.jpg';
import V1 from '../../public/images/Mem/V1.mp4';
import V2 from '../../public/images/Mem/V2.mp4';
import V3 from '../../public/images/Mem/V3.mp4';
import V4 from '../../public/images/Mem/V4.mp4';
import V5 from '../../public/images/Mem/V5.mp4';

const initialData = [
  {
    category: "Вопросы для умных",
    questions: [
      { id: 1, value: 100, q: "Назовите основные 5 физических качеств", a: "сила, быстрота, гибкость, координация, ловкость" },
      { id: 2, value: 200, q: "Какой стиль в плавании изобретен последним?", a: "Баттерфляй" },
      { id: 3, value: 300, q: "Что означает 'биатлон' в переводе с греческого языка?", a: "Сочетания двух видов" },
      { id: 4, value: 400, q: "Назовите альтернативное название водного хоккея", a: "Осьминог" },
      { id: 5, value: 500, q: "В каком виде спорта играют с этим мячом?", a: "Сверчок", imgQuestion: sverchok },
    ]
  },
  {
    category: "Где кто?",
    questions: [
      { id: 6, value: 100, q: "Угадай людей на фото", imgQuestion: h1, imgAnswer: o1 },
      { id: 7, value: 200, q: "Угадай людей на фото", imgQuestion: h2, imgAnswer: o2},
      { id: 8, value: 300, q: "Угадай людей на фото", imgQuestion: h3, imgAnswer: o3 },
      { id: 9, value: 400, q: "Угадай людей на фото", imgQuestion: h4, imgAnswer: o4 },
      { id: 10, value: 500, q: "Угадай людей на фото", imgQuestion: h5, imgAnswer: o5 },
    ]
  },
  {
    category: "Кого соединили?",
    questions: [
      { id: 11, value: 100, q: "Угадай кого соединили", imgQuestion: с1, imgAnswers: [ph11, ph12] },
      { id: 12, value: 200, q: "Угадай кого соединили", imgQuestion: с2, imgAnswers: [ph21, ph22] },
      { id: 13, value: 300, q: "Угадай кого соединили", imgQuestion: с3, imgAnswers: [ph31, ph32] },
      { id: 14, value: 400, q: "Угадай кого соединили", imgQuestion: с4, imgAnswers: [ph41, ph42] },
      { id: 15, value: 500, q: "Угадай кого соединили", imgQuestion: с5, imgAnswers: [ph51, ph52] },
    ]
  },
  {
    category: "Шлакоблокунь",
    questions: [
      { id: 16, value: 100, q: "Кто это?", imgQuestion: hS1, imgAnswer: oS1 },
      { id: 17, value: 200, q: "Кто это?", imgQuestion: hS2, imgAnswer: oS2},
      { id: 18, value: 300, q: "Кто это?", imgQuestion: hS3, imgAnswer: oS3 },
      { id: 19, value: 400, q: "Кто это?", imgQuestion: hS4, imgAnswer: oS4 },
      { id: 20, value: 500, q: "Кто это?", imgQuestion: hS5, imgAnswer: oS5 },
    ]
  },
  {
    category: "Мемы",
    questions: [
      { id: 21, value: 100, q: "Какова твоя профессия?", imgQuestion: m1, video: V1 },
      { id: 22, value: 200, q: "Что вы хотели скушать?", imgQuestion: m2, video: V2},
      { id: 23, value: 300, q: "В какой войне она участвовала?", imgQuestion: m3, video: V3 },
      { id: 24, value: 400, q: "Что его бесит?", imgQuestion: m4, video: V4 },
      { id: 25, value: 500, q: "Какая у нее машина?", imgQuestion: m5, video: V5 },
    ]
  }
];

const JeopardyGame = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Три гребка и на дно', score: 0, color: '#F4FCAB' },
    { id: 2, name: 'Пузырьки в отставке', score: 0, color: '#EBA0C0' },
    { id: 3, name: 'Спасатели Малибу в тапочках', score: 0, color: '#95DBAF' },
  ]);

  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [visited, setVisited] = useState(new Set());

  const preloadImages = (q) => {
  const imgs = getAnswerImages(q);
    imgs.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleQuestionClick = (q) => {
    if (visited.has(q.id)) return;
    setActiveQuestion(q);
    setShowAnswer(false);
    preloadImages(q);
  };

  // Метод ручного изменения счета (с боковой панели)
  const adjustScore = (teamId, amount) => {
    setTeams(teams.map(t => t.id === teamId ? { ...t, score: t.score + amount } : t));
  };

  // Метод автоматического начисления баллов за текущий вопрос
  const handleAwardPoints = (teamId, isCorrect) => {
    if (!activeQuestion) return;
    const points = activeQuestion.value;
    adjustScore(teamId, isCorrect ? points : -points);
  };
  const closeQuestion = () => {
    setVisited(prev => new Set(prev).add(activeQuestion.id));
    setActiveQuestion(null);
  };

  const getAnswerImages = (q) => {
    if (!q) return [];
    const imgs = q.imgAnswers ?? q.imgAnswer ?? []; // поддержим оба поля на случай
    if (!imgs) return [];
    return Array.isArray(imgs) ? imgs : (imgs ? [imgs] : []);
  };

  const answerImages = getAnswerImages(activeQuestion);

  const getAnswerMedia = (q) => {
    if (!q) return { images: [], video: null, embed: null, poster: null };

    // безопасный BASE для public-путей (работает с Vite и import.meta.env.BASE_URL)
    const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
      ? import.meta.env.BASE_URL
      : '/';

    const normalizePath = (p) => {
      if (!p) return null;
      // Если уже полный URL (http(s)://) или data:, возвращаем как есть
      if (/^(https?:)?\/\//.test(p) || p.startsWith('data:')) return p;
      // Если уже содержит BASE — оставляем
      if (p.startsWith(BASE)) return p;
      // Иначе добавляем BASE (убирая ведущие слеши)
      return BASE + p.replace(/^\/+/, '');
    };

    // Поддерживаем несколько вариантов названий полей
    const rawImgs = q.imgAnswers ?? q.imgAnswer ?? q.img ?? [];
    const imgs = Array.isArray(rawImgs)
      ? rawImgs.filter(Boolean)
      : (rawImgs ? [rawImgs] : []);
    const images = imgs.map(normalizePath).filter(Boolean);

    const videoRaw = q.video ?? q.videoUrl ?? null;
    const video = normalizePath(videoRaw);

    const embed = q.videoEmbed ?? q.embed ?? null; // ожидается iframe embed url (https://www.youtube.com/embed/ID)
    const poster = normalizePath(q.videoPoster ?? q.poster ?? null);

    return {
      images,
      video: video || null,
      embed: embed || null,
      poster: poster || null
    };
  };

  const media = getAnswerMedia(activeQuestion);

  return (
    <div className="jeopardy-container">
      {/* Боковая панель команд */}
      <div className="sidebar">
        {teams.map(team => (
          <div key={team.id} className="team-card" style={{ backgroundColor: team.color }}>
            <div className="team-name">{team.name}</div>
            <div className="score">{team.score}</div>
            <div className="score-controls">
              {/* Кнопки быстрого изменения счета на +-100 вручную */}
              <button className="score-btn minus" onClick={() => adjustScore(team.id, -100)}>-</button>
              <button className="score-btn plus" onClick={() => adjustScore(team.id, 100)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Игровое поле */}
      <div className="board">
        {initialData.map((cat, idx) => (
          <div key={idx} className="column">
            <div className="header-card">{cat.category}</div>
            {cat.questions.map(q => {
              const isVisited = visited.has(q.id);
              return (
                <div
                  key={q.id}
                  className={`question-card ${isVisited ? 'visited' : ''}`}
                  onClick={() => handleQuestionClick(q)}
                >
                  {q.value}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Модальное окно вопроса */}
      {activeQuestion && (
        <div className="modal-overlay">
          <div className="modal">
          <div className="modal-body">

            {/* картинка-вопрос (показывается всегда) */}
            {activeQuestion.imgQuestion && (
              <img
                src={activeQuestion.imgQuestion}
                alt={`Вопрос #${activeQuestion.id}`}
                className="question-image"
                loading="eager"   // можно eager для быстрой загрузки вопроса
              />
            )}

            <h2 className="modal-text">{activeQuestion.q}</h2>
            {/* если есть картинка — показываем её */}
            {activeQuestion.img && (
              <img src={activeQuestion.img} alt="Вопрос — картинка" className="question-image" />
            )}

            { showAnswer && (
              <>
                {media.images.length > 0 && (
                  <div className="answer-images">
                    {media.images.map((src, i) => <img key={i} src={src} className="answer-image" />)}
                  </div>
                )}

                {media.video && (
                  <div className="video-container">
                    <video src={media.video} controls poster={media.poster ?? ''} />
                  </div>
                )}

                {media.embed && (
                  <div className="video-container">
                    <iframe src={media.embed} allowFullScreen />
                  </div>
                )}

                {/* если нет медиа — показываем текст */}
                {media.images.length === 0 && !media.video && !media.embed && activeQuestion.a && (
                  <div className="answer-text">{activeQuestion.a}</div>
                )}
              </>
            )}

            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? "Скрыть ответ" : "Показать ответ"}
              </button>
              <button className="btn btn-secondary" onClick={closeQuestion}>
                Закрыть вопрос
              </button>
            </div>
        
            {/* Быстрое начисление баллов прямо в модальном окне */}
            <div className="modal-footer">
            <div className="modal-scoring">
              <h4>Начислить баллы за этот вопрос (+/- {activeQuestion.value}):</h4>
              <div className="modal-teams-list">
                {teams.map(team => (
                  <div key={team.id} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{team.name}</span>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      <button 
                        className="score-btn minus" 
                        style={{ padding: '5px 10px', fontSize: '12px' }}
                        onClick={() => handleAwardPoints(team.id, false)}
                      >
                        -
                      </button>
                      <button 
                        className="score-btn plus" 
                        style={{ padding: '5px 10px', fontSize: '12px' }}
                        onClick={() => handleAwardPoints(team.id, true)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default JeopardyGame;
