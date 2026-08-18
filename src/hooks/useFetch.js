import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function dataJson() {
            try {
                
                setLoading(true)
                const { data: meals } = await axios.get(url)
                setData(meals)
                toast.success("Download successfly")
                setLoading(false)
            } catch (error) {
                toast.error("Something error or you internter is not good")
            }
        }

        dataJson()

    }, [])

    return { data, error, loading, setData }
}