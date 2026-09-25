# OmniCapBench — Project Page

Project website for **OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning** (NeurIPS 2026, Evaluations & Datasets Track).

🌐 **Website:** https://01yzzyu.github.io/OmniCapBench-page/
🤗 **Dataset:** https://huggingface.co/datasets/OmniCapBench/OmniCapBench
📄 **Paper / arXiv:** coming soon
💻 **Evaluation code:** coming soon

## About

OmniCapBench reframes audio–visual caption evaluation as a deep-structured diagnostic framework. Instead of scoring free-form prose, models predict atomic, verifiable units across three native tracks — **References** (persistent entities), **Events** (timestamped audio) and **Shots** (visual timeline and cross-modal grounding). Deterministic rules verify structure; bounded LLM judges only compare local semantics on aligned units.

786 densely annotated videos · 12.8 hours · 5,818 references · 11,419 shots · 39,160 subshots · 6,537 audio events

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html              # single-page site
static/css/style.css    # styles (light + dark)
static/js/main.js       # theme toggle, leaderboard tabs, BibTeX copy
static/images/          # figures exported from the paper
```

## Citation

```bibtex
@inproceedings{yang2026omnicapbench,
  title     = {OmniCapBench: A Deep-Structured Evaluation Framework for
               Fine-Grained Audio-Visual Captioning},
  author    = {Yang, Zhongyu and Tao, Jiale and Chen, Ruitao and Yang, Zuhao and
               Yuan, Yingfang and Zhao, Xueliang and Auden and Wang, Kai and
               Shao, Shuai and Wang, Biao and Yves, Steve and Lu, Qinglin},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS),
               Evaluations and Datasets Track},
  year      = {2026}
}
```

## Related work

| Step | Project | Link |
| --- | --- | --- |
| Paradigm design | MTSS (Multi-Stream Scene Script) | [arXiv:2604.11244](https://arxiv.org/abs/2604.11244) |
| Evaluation | **OmniCapBench** (NeurIPS 2026) | this repo |
| Algorithm iteration | OmniVideo-R1 (ICML) | [arXiv:2602.05847](https://arxiv.org/abs/2602.05847) |

## License

Website content released under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/). Layout adapted from the [Nerfies](https://github.com/nerfies/nerfies.github.io) project page.
