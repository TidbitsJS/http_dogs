import { NextResponse } from 'next/server';

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(request, { params }) {
    try {
        const statusCode = params.code
        console.log(statusCode)

        if (!statusCode || isNaN(Number(statusCode))) {
            return NextResponse.json({ error: 'Invalid status code. Please provide a valid numeric status code.' }, { status: 400 });
        }

        const url = `https://http.dog/${statusCode}.json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status code ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json({ data }, { headers: corsHeaders });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return NextResponse.json({ error: 'Error fetching data. Please try again later.' }, { status: 500 });
    }
}
