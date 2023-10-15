import { useEffect, useState } from 'react'
import VideoList from '../VideoList'
import styles from './SearchVideoList.module.css'
import Loader from '../Loader'

function filterVideo(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({videos}) {

    const [searchText, setSearchText] = useState('')
    const foundVideos = filterVideo(videos, searchText)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <section className={styles.container}>
            <input type='search' placeholder='Pesquisar...' value={searchText} onChange={e => setSearchText(e.target.value)}/>
            {loading ? <Loader/> :
                <VideoList videos={foundVideos} emptyHeading={`Sem vídeos sobre "${searchText}"`}></VideoList>
            }
        </section>
    )
}

export default SearchVideoList