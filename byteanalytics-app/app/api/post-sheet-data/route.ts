import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, country, newsletter } = await request.json();

  try {
    const credentials = {
      client_email: process.env.NEXT_PUBLIC_YOUR_SERVICE_ACCOUNT,
      private_key: process.env.NEXT_PUBLIC_YOUR_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ auth, version: 'v4' });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_YOUR_GOOGLE_SHEET_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, country, newsletter]],
      },
    });

    return NextResponse.json({ result: 'success', data: response.data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to append data to Google Sheets', details: error });
  }
}
