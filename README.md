This low-budget, fan-made project lives at https://gamechanger-foolsgold.kgilbert-cmu.workers.dev/

![Video gallery](../main/public/thumbnails.png)

I shut off updates on August 16, one month after the episode aired. No further updates will be collected, even though the clips will theoretically continue to gain views in perpetuity.

The scores at the end of the episode, by Dropout's own reckoning were Trapp at 5.8 million, Rekha at 8.1 million, Jordan at 10.5 million, and Sam at 2.0 million. Their method (which I suppose is the most official) does not weight Sam's contribution and does not reward Trapp for his cheap (albeit losing) investments. Regardless, the order of winners is consistent with what we predicted here, as Jordan pulls way ahead carried by her utter (udder) faith in breast milk.

Final screenshot of the scores:

![Video gallery](../main/public/foolsgold.png)

### F.A.Q. - Frequently Asked Questions

1. **Why?**
    * Truthfully, I thought that Dropout would release their own real-time dashboard to kind of go along with the episode. When they didn't, and I saw the work being done by WeiShiLirinArelius, I decided to make my own.
2. **How did you collect the video statistics?**
    * Tediously.
3. **But actually?**
    * Parsing each of the three websites, YouTube and TikTok are rounded to the nearest thousand. Instagram doesn't show views on desktop (even though it does on mobile...) so likes have been multiplied 10x as a proxy.
4. **Can you add a chart showing [...]?**
    * I'm still tinkering on the chart visualization of scores over time, but I think it will look better once more data is collected. I also want to redo the whole picture gallery thumbnail container with links to each video source (i.e. not just YouTube). This should give a better/natural way to verify scores.
5. **What did you use to make this?**
    * Plotly.js on the front-end, and a simple static site Cloudflare worker in the back.
