// 5x5マスに表示する文字の配列
const characters = [
    ['と', 'か', 'が', 'の', 'ず'],
    ['け', 'び', 'ら', 'み', 'う'],
    ['ゆ', 'ー', 'く', 'え', 'ら'],
    ['か', 'つ', 'す', 'か', 'の'],
    ['な', 'の', 'た', 'し', 'み']
];

// HTMLの<div id="puzzle-grid">を取得
const gridContainer = document.getElementById('puzzle-grid');

// 配列の各要素（文字）に対して処理を実行
characters.forEach(row => {
    row.forEach(char => {
        // 新しい<div>要素（1マス分）を作成
        const cell = document.createElement('div');
        
        // 作成した<div>に"grid-cell"というクラス名を追加（CSSでデザインを適用するため）
        cell.classList.add('grid-cell');
        
        // <div>の中に文字を入れる
        cell.textContent = char;
        
        // 完成したマスをグリッドコンテナに追加
        gridContainer.appendChild(cell);
    });
});
