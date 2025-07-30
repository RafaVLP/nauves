/**
 * game-config.js
 * * Arquivo central para todas as configurações e balanceamento do jogo.
 * Modifique os valores aqui para ajustar a dificuldade, preços, chances de drop e mais,
 * sem a necessidade de alterar o código principal do jogo.
 */
const GAME_CONFIG = {
    // --- Configurações Gerais de Dificuldade ---
    
    /** Pontuação necessária para o primeiro chefe aparecer. */
    pointsForFirstBoss: 100,
    
    /** * Multiplicador de dificuldade para cada novo estágio. 
     * Afeta a vida e o dano dos inimigos e chefes. 
     * Ex: 1.5 significa um aumento de 50% por estágio.
     */
    difficultyIncreasePerStage: 1.2,

    // --- Configurações do Jogador ---

    /** Chance de acerto crítico inicial do jogador (ex: 0.10 para 10%). */
    initialCritChance: 0.10,

    // --- Configurações dos Inimigos ---

    /** Vida base dos inimigos comuns. */
    initialEnemyHP: 3,
    
    /** Configurações de moedas dropadas por inimigos. */
    enemyCoinDrop: {
        min: 1,
        max: 10,
        multiplierPerLevel: 1.1 // Multiplicador baseado no nível do inimigo
    },

    // --- Configurações dos Meteoros ---

    /** Vida base dos meteoros. */
    initialMeteorHP: {
        min: 7,
        max: 13
    },
    
    /** Chance de um meteoro especial (que dropa mais moedas) aparecer. */
    coinMeteorChance: 0.10, // 10%

    /** Quantidade de moedas dropadas pelo meteoro especial. */
    specialMeteorCoinDrop: 50,

    // --- Configurações de Power-Ups ---

    /** Chance geral de um inimigo ou meteoro dropar um power-up. */
    powerUpDropChance: 0.05, // 5%
    
    /** * Distribuição da chance de cada tipo de power-up.
     * A soma de todos os valores deve ser 100.
     */
    powerUpDistribution: {
        health: 60,    // 60% de chance de ser 'health'
        shield: 20,    // 20% de chance de ser 'shield'
        damage: 15,    // 15% de chance de ser 'damage'
        extraShot: 5   // 5% de chance de ser 'extraShot'
    },

    // --- Configurações da Loja ---

    shop: {
        /** Preços iniciais para os upgrades na loja. */
        initialPrices: {
            health: 300,
            shield: 300,
            crit: 300,
            damage: 300
        },
        /** Multiplicador de aumento de preço a cada compra. */
        priceIncreaseMultiplier: 1.75
    },
    
    // --- Configurações Adicionais de Balanceamento (Opcional) ---

    player: {
        /** Velocidade dos projéteis do jogador. */
        bulletSpeed: -400,
        /** Intervalo entre os tiros do jogador em milissegundos. */
        fireRate: 400, 
    },
    enemy: {
        /** Velocidade base dos inimigos. */
        baseSpeed: 100,
        /** Intervalo base entre os tiros dos inimigos em milissegundos. */
        baseFireRate: 2700 
    }
};
