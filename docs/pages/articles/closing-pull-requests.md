# Best Practices for Closing Pull Requests

_How to reject changes without rejecting the contributor._

* * *

In any healthy software team, pull requests (PRs) are where code meets collaboration. But sometimes, the code just isn’t right — wrong direction, flawed approach, or simply misaligned with the team’s goals. And when that happens, it’s tempting to hit “Close” and move on.

But _how_ you close a pull request matters. A lot.

Closing a PR is a moment of feedback, trust, and visibility — not just a mechanical act. When done carelessly, it can discourage contributors and breed resentment. But when done **gracefully**, it becomes a chance to **build alignment, strengthen relationships, and reinforce engineering culture**.

Here’s how to disagree with a PR — and close it — the right way.

* * *

## 1. 🔍 **Understand Before You Act**

Before you make any decisions, read the PR closely:

* **What problem is the author trying to solve?**
    
* **What assumptions are they making?**
    
* **Are there parts of the code you _do_ agree with?**
    

This builds empathy — and ensures your disagreement is _informed_, not reactive.

* * *

## 2. 💬 **Start the Conversation**

Instead of closing the PR immediately, use the comment thread to open a conversation:

* Ask clarifying questions.
    
* Point out concerns constructively.
    
* Invite the author to share their thinking.
    

💡 _Example:_

> “Thanks for putting this together. I’m wondering if this change aligns with our recent work on X. Could you walk me through your thinking around the new API design?”

This shows that your _default posture is curiosity_, not rejection.

* * *

## 3. 🤝 **Build Agreement in Public**

If you and the author start to align on why the current direction won’t work, capture that understanding in the thread:

* Reiterate the agreed reasons for pivoting.
    
* Optionally suggest an alternative path.
    

This shared agreement becomes the foundation for closing the PR — and serves as documentation for others later.

💡 _Example:_

> “After chatting about this, it sounds like we both agree that this logic is better handled by splitting it into a background task. Let’s move forward with that instead.”

* * *

## 4. 📝 **Close With Context**

Only after the conversation has matured — and ideally, consensus has been reached — should you close the PR. But don’t just press the button. Leave a final comment that:

* Acknowledges the contributor’s effort.
    
* Recaps the decision.
    
* Points to next steps, if applicable.
    

💡 _Example:_

> “Thanks again for the work here. We’ve decided to take a different approach based on performance tradeoffs discussed above. Closing this for now, but we really appreciate the initiative!”

Even if you disagreed, **you honored their work**.

* * *

## 5. 🚫 **What Not to Do**

Here’s what you want to avoid:

* Closing a PR without any comment.
    
* Leaving vague or cryptic rejection notes (e.g., “not needed”).
    
* Being overly critical of _style_ when the _substance_ isn’t aligned.
    
* Ghosting a PR until it goes stale and gets auto-closed.
    

These kill morale — especially for newer contributors or folks outside your core team.

* * *

## 6. ✍️ **Templates You Can Use**

Here are two quick templates you can adapt:

**💡 Graceful Decline (No Alignment Yet):**

> “Thanks for the PR! I appreciate the initiative here. I think the approach introduces some complexity that might not align with our current direction. I’ve left a few notes — happy to continue the discussion, but I’m going to close this for now as we explore other options.”

**🤝 Graceful Closure (After Agreement):**

> “We talked this through and decided to solve the problem differently. Thanks again for the thoughtful work — closing this now, but your effort helped clarify the right path forward.”

* * *

## Conclusion: Disagree with the Code, Not the Person

Closing a pull request doesn’t have to mean closing the door on a teammate. It can be an invitation to realign, to learn, and to collaborate better the next time.

**Graceful disagreement is one of the most powerful tools in your engineering toolkit.** Use it generously.