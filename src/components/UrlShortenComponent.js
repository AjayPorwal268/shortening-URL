import React, {useEffect, useState} from "react";
import { shortenUrl } from "../shared/api/shorten-api";
import bgShortenMobile from "./../images/bg-shorten-mobile.svg"
import bgShortenDeskTop from "./../images/bg-shorten-desktop.svg"

export default function UrlShortenComponent() {
    const [urlList, setUrlList] = useState([]);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const urls = localStorage.getItem("urlList");
        if(urls) {
            setUrlList(JSON.parse(urls));
        }
    },[]);


    const saveUrlsIntoLocalStorage = (urlDetailsList =[]) => {
        localStorage.setItem("urlList", JSON.stringify(urlDetailsList));
    }

    const shortUrl = async () => {
        shortenUrl(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response) => {
            const result = response.result;
            setUrlList((preState) => {
                const newList = preState.concat({"code": result.code, "originalUrl" : result.original_link, "shortenUrl": result.full_share_link});
                saveUrlsIntoLocalStorage(newList);
                return newList;
            });
            setError("");
            setUrl("");

        }).catch((err) => {
            console.log(err);
            if(err.error_code === 1) {
                setError("Please add a link");
            }
            if(err.error_code === 2) {
                setError("This is not a valid URL");
            }
        });
        
    }

    const copyShortenUrl = async (urlDetails) => {
        await navigator.clipboard.writeText(urlDetails.shortenUrl);

        const urlDetailsList = urlList.map((e) => {
            return e.code === urlDetails.code ? {...e, urlCopied : true} : {...e, urlCopied : false};
        });
        setUrlList(urlDetailsList);
        saveUrlsIntoLocalStorage(urlDetailsList);
    }
   
    return (
        <div style={{'--bg-shorten-mobile': `url(${bgShortenMobile})`, '--bg-shorten-deskTop': `url(${bgShortenDeskTop})`}}
            className="w-full  relative -top-16">
            <div className="rounded-xl bg-primary-darkViolet bg-[image:var(--bg-shorten-mobile)] sm:bg-[image:var(--bg-shorten-deskTop)]
                bg-right-top bg-no-repeat w-full flex flex-col px-8 py-8 gap-y-4 mb-6 sm:flex-row sm:justify-center sm:items-center sm:gap-x-8">
                <div className="w-full flex flex-col gap-y-1 ">
                    <input className='px-2 py-2 rounded-lg' value={url} onChange={(e) => setUrl(e.target.value)}
                        type='text' placeholder='Shorten a link here...'></input>
                    {error && <span className="text-red-600">{error}fsdfdsffdfdsfdsf</span>}
                </div>
                <button className="bg-primary-gray text-2xl text-white font-bold px-8 py-2 rounded-lg sm:basis-1/4 sm:self-start" onClick={shortUrl}>Shorten It!</button>
            </div>
            <div className='w-full max-h-96 sm:max-h-60 overflow-auto '>
                {urlList.length > 0 && urlList.map((urlDetails, key) => {
                    return (
                        <div key={urlDetails.code} className='w-full flex flex-col bg-white gap-y-2 mb-2  font-semibold text-lg rounded-lg
                            sm:flex-row sm:items-center sm:py-4'>
                            <span className='original-url-text px-4 py-2 sm:flex-grow'>{urlDetails.originalUrl}</span>
                            <hr className="bg-primary-gray border[0.5px] border-primary-gray sm:hidden "></hr>
                            <span className="shorten-url-text px-4 py-2 text-primary-gray">{urlDetails.shortenUrl}</span>
                            <button className={urlDetails.urlCopied ? 'mx-4 my-4 py-2 rounded-lg bg-primary-darkViolet font-bold text-xl text-white sm:my-0 sm:px-8' 
                                :'mx-4 my-4 py-2 rounded-lg bg-primary-gray font-bold text-xl text-white sm:my-0 sm:px-8'} 
                                onClick={() => copyShortenUrl(urlDetails)}>{urlDetails.urlCopied ? "Copied!" : "Copy"}</button>
                        </div>
                    )
                })}
            </div>
       </div>
    )
}