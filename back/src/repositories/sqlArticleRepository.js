//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import { pool } from "../utils/database.js";

// Get all articles
export async function getArticles() {
    // TODO 
    const [ articles ] = await pool.query('SELECT * FROM articles')
    return articles || null;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const [rows] = await pool.query(`SELECT * FROM articles WHERE id = ?`, [id]);
    return rows[0] || null;
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const [result] = await pool.query(`INSERT INTO articles SET ?`, article);
    return await getArticleById(result.insertId);
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const [result] = await pool.query(`UPDATE articles SET ? WHERE id = ? `, [updatedData, id]);
    return result.affectedRows === 0 ? null : await getArticleById(id);
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    await pool.query(`DELETE FROM articles WHERE id = ? `, [id])

}
