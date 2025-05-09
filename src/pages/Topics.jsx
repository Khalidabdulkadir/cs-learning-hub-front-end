import { useState, useEffect } from 'react'
import TopicCard from '../components/TopicCard'
import topicsData from '../data/topics.json'

function Topics() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    setTopics(topicsData.topics)
  }, [])

  return (
    <div>
      <h2 className="mb-4">CS Topics</h2>
      <div className="row">
        {topics.map(topic => (
          <div key={topic.id} className="col-md-6">
            <TopicCard
              title={topic.title}
              content={topic.content}
              link={topic.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topics
