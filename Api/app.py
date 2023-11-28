from datetime import datetime, timedelta
from flask import Flask, request, jsonify
from newsapi import NewsApiClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

newsapi = NewsApiClient(api_key='eac6d5e5d2c743b7b83619a40c22864c')

@app.route('/get_news', methods=['GET'])
def get_news():
    user_query = request.args.get('q', '')
    # Calculate the date 7 days ago
    seven_days_ago = datetime.now() - timedelta(days=7)
    # Format the date as a string in the required format
    from_date = seven_days_ago.strftime('%Y-%m-%d')
    # Specify the pageSize parameter for the number of elements to retrieve
    page_size = int(request.args.get('pageSize', 5))
    # Get all articles based on user query
    all_articles = newsapi.get_everything(q=user_query,
                                          sort_by='publishedAt',
                                          language=request.args.get('language', 'en'), 
                                          from_param=from_date,
                                          to=datetime.now().strftime('%Y-%m-%d'),
                                          page=int(request.args.get('page', 1)),
                                          page_size=page_size
                                    )

    # Extract relevant information from the articles
    articles = all_articles['articles']
    total_results = all_articles['totalResults']

    # Combine and return the results
    result = {
        'articles': articles,
        'totalResults': total_results
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
