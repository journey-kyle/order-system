import main_bg from '../img/main_bg.PNG';

const Home = () => {



    const notices = [
        { id: 1, title: '공지사항 Database에서 정보를 불러오고 있습니다.', content: '공지사항은 공지사항 database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.' },
        { id: 2, title: '환영합니다. 공지사항 페이지가 개설되었습니다.', content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ];
    const news = [
        { id: 1, title: 'NEWS Database에서 정보를 불러오고 있습니다.', content: 'NEWS는 NEWS database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.' },
        { id: 2, title: '환영합니다. NEWS 페이지가 개설되었습니다.', content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ];

    return(
        <>
            <div className="h-screen flex justify-center"
                style={{ backgroundImage: `url(${main_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-black bg-opacity-10">
                    <div className="container mx-auto px-4 py-4">
                        <h1 className="text-2xl font-bold mb-4 text-white">공지사항</h1>
                        <div className="grid gap-4">
                        {notices.map((notice) => (
                            <div key={notice.id} className="bg-slate-200 rounded-2xl shadow-md p-4">
                                <h2 className="text-xl font-semibold">{notice.title}</h2>
                                <p className="mt-2 text-md">{notice.content}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="bg-black bg-opacity-10">
                    <div className="container mx-auto px-4 py-4">
                        <h1 className="text-2xl font-bold mb-4 text-white">News</h1>
                        <div className="grid gap-4">
                        {news.map((news) => (
                            <div key={news.id} className="bg-slate-200 rounded-2xl shadow-md p-4">
                                <h2 className="text-xl font-semibold">{news.title}</h2>
                                <p className="mt-2 text-md">{news.content}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;