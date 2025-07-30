// =================================================================
// ARQUIVO DE CONFIGURAÇÃO E BALANCEAMENTO DO JOGO
// Altere os valores aqui para ajustar a dificuldade e outras mecânicas.
// =================================================================

const GAME_CONFIG = {

    // --- Configurações do Jogador ---
    PLAYER: {
        INITIAL_HEALTH: 100,
        INITIAL_DAMAGE: 1,
        INITIAL_CRIT_CHANCE: 0.10, // 10% de chance
    },

    // --- Dificuldade e Progressão ---
    PROGRESSION: {
        SCORE_TO_FIRST_BOSS: 100,
        STAGE_DIFFICULTY_MULTIPLIER: 1.5, // 50% mais forte a cada estágio
        BOSS_SPEED_MULTIPLIER: 1.2,       // 20% mais rápido a cada estágio
    },

    // --- Inimigos e Meteoros ---
    ENEMIES: {
        BASE_HEALTH: 3,
        BASE_DAMAGE: 5,
        BASE_SPEED: 100,
    },
    METEORS: {
        BASE_HEALTH: { min: 7, max: 13 },
        SHINY_CHANCE: 0.1, // 10% de chance
    },

    // --- Economia (Moedas) ---
    ECONOMY: {
        COIN_DROP_MULTIPLIER: 1.1, // 10% a mais de moedas
        SHINY_METEOR_COIN_MULTIPLIER: 10,
    },

    // --- Loja de Melhorias ---
    SHOP: {
        INITIAL_PRICES: {
            health: 300,
            shield: 300,
            crit: 300,
            damage: 300,
        },
        PRICE_INCREASE_MULTIPLIER: 1.75, // Aumento de 75% a cada compra
    },

    // --- Power-ups ---
    POWERUPS: {
        TOTAL_DROP_CHANCE: 0.4, // 50% de chance total
        DROP_WEIGHTS: {
            health: 60,    // 60%
            shield: 20,    // 20%
            damage: 15,    // 15%
            extraShot: 5,  // 5%
        },
    },
};
