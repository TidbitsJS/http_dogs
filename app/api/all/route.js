import { NextResponse } from 'next/server';

import httpStatusCodes from '@/constants';

export async function GET() {
    try {
        const responses = await Promise.all(
            httpStatusCodes.map(async (statusCode) => {
                const url = `https://http.dog/${statusCode}.json`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Request failed with status code ${response.status}`);
                }

                const data = await response.json();
                return data;
            })
        );

        return NextResponse.json({ data: responses });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return NextResponse.json({ error: 'Error fetching data. Please try again later.' }, { status: 500 });
    }
}
