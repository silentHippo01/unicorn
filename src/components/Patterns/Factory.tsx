

const WeatherWidget = (data: any) => {
    return (
        <>

        </>
    )
}

const TrafficWidget = (data: any) => {
    return (
        <>

        </>
    )
}

const ProductWidget = (data: any) => {
    return (
        <>

        </>
    )
}

//Фабрика
const Widgets = (item: any) => {
    switch (item.type) {
        case 'Weather':
            return <WeatherWidget data={item.data} />;
        case 'Traffic':
            return <TrafficWidget data={item.data} />
        case 'Product':
            return <ProductWidget data={item.data} />
        default:
            return null
    }
}

const Page = () => {
    const widgetsData: Array<any> = [
        { type: 'Weather', data: {} },
        { type: 'Traffic', data: {} },
        { type: 'Product', data: {} },
    ]

    return (
        widgetsData && widgetsData.map((item: any) => <Widgets item={item} />)
    )
}