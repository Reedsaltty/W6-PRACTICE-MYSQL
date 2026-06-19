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
    const article = await pool.query(`SELECT * FROM articles WHERE id = ?`,[id])
    return article || null;
}

// Create a new article
export async function createArticle(article) {
    // TODO
    await pool.query(`INSERT INTO articles SET ?`,article)
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    await pool.query(`UPDATE articles SET ? WHERE id = ? `, [updatedData,id])

}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    await pool.query(`DELETE articles SET WHERE id = ? `, [id])

}
