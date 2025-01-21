import { NextResponse } from "next/server";
import pool from "@/helper/db";  // Assuming this pool is using mysql2/promise

export async function GET() {
    try {
        // Using the promise-based API to execute the query
        const [results] = await pool.query("SELECT * FROM blog ORDER BY id DESC");  // This returns results as the first element of an array

        return NextResponse.json({
            message: "Success",
            success: true,
            result: results,  // Directly return the results
        });
    } catch (error) {
        console.error(error.message);  // Log the error for debugging
        return NextResponse.json({
            message: error.message || "Internal Server Error",
            success: false,
        });
    }
}
