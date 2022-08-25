import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'vh9czuur', //process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skHyxhk5aqvgsQgqNJzBJkgQr5KHUOxyTmTnPDud9FfLSthYRKpZgwTbBJXnoBRAhCd8D89OaNZSzWw9b6DgYcBfst28MSLowIHCMusvEguXNFDXnkBJ2H47E7ODQ2nV3rFzvDBTTaRFVmcB4zn0a3jAxNiL4vF1H99ofbO2dMIOVCCpEB33', //process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
    return builder.image(source)
}
