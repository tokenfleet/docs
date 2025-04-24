---
slug: audit-report
title: Token Fleet Smart Contract Audit Report
authors: [marcos, andy]
tags: [audit, security, tokenfleet, nethermind]
---

# 🔒 Token Fleet’s Smart Contracts: Audited and Ready for the Road

Hello Token Fleet community!

We’re excited to share that Token Fleet’s smart contracts have been **successfully audited** by the renowned **Nethermind Security team**.

<!-- truncate -->

Security is the foundation of everything we build. Before bringing Token Fleet to life, we made sure our code was tested, reviewed, and verified by experts.

## 🚗 Why Smart Contract Audits Matter

At Token Fleet, smart contracts handle:

- Fractional car ownership
- Rental income tracking
- User rewards and income distribution
- Secure, transparent asset management

This is why we invested in a full **security review** of our system. It’s not just about trust, it’s about ensuring that every user interaction is protected by solid code.

---

## 🔍 Audit Highlights

- **769 lines of Solidity code** reviewed
- **67/67 tests passed**, zero failed
- **No critical vulnerabilities**
- **1 High** issue: **Fixed**
- **2 Medium** issues: **1 Fixed, 1 Acknowledged**
- **2 Low** issues: **Acknowledged**

---

### 🔥 Fixed Issues

1. **Fundraising Target Logic**  
   Corrected to ensure that all contributions are tracked accurately. 

2. **Reward Claiming Accuracy**  
   Now ensures users always receive full rewards, without loss from rounding errors. 

---

### ⚠️ Acknowledged Issues

1. **Referral Rewards**  
   Referral rewards could lock if a user has no referrer. Our system enforces referrers on signup to avoid this.  

2. **Deal Deadlines**  
   Deals can close after a deadline if users don’t cancel. Deadlines serve as user protection, not a strict blocker.  

3. **Portfolio Approval Flexibility**  
   Token approvals can currently be handled through a low-level function. This is functional and may be improved later.  

---

## 📄 Full Audit Report

For those who like details, the full audit report is available here:  
👉 [tokenfleet.io/audit](https://tokenfleet.io/audit)

---

## 🛠️ What This Means for You

This audit proves that:

- **Security is not an afterthought**
- **Ownership and rental income are protected**
- **Smart contracts are reliable and transparent**

We’re building a platform where **real cars meet real returns**. You can trust the technology behind your investments.

---

## 🚀 What’s Next?

We’re almost ready to launch. Token Fleet will soon open up a new era of decentralized car ownership and income.

**Own cars. Earn yield. Trust the code.**

---

Stay tuned, and thank you for being part of our journey!

- **Twitter**: [@tokenfleet_io](https://twitter.com/tokenfleet_io)  
- **Telegram**: [@tokenfleet_io](https://t.me/tokenfleet_io)  
- **LinkedIn**: [Token Fleet](https://linkedin.com/company/tokenfleet)  
- **Facebook**: [Token Fleet Official](https://www.facebook.com/profile.php?id=61568084092915)
